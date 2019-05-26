import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/api/services';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/api/models';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BetterUserService } from '../better-user/better-user.service';
import { BetterUser } from '../better-user/better-user';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private readonly _authCookie: string = 'Authorization';
    private readonly _usernameCookie: string = 'username';
    private _currentUsername: string;
    private _currentUser: Observable<User>;
    private _currentBetterUser: Observable<Observable<BetterUser>>;

    constructor(
        private usersService: UsersService,
        private betterUserService: BetterUserService,
        private cookieService: CookieService,
        private router: Router
    ) {
        this._currentUsername = this.cookieService.get(this._usernameCookie);
        this._currentUser = this.getCurrentUser(this._currentUsername);
        this._currentBetterUser = this.getCurrentBetterUser();
    }

    get currentUser(): Observable<Observable<BetterUser>> {
        return this._currentBetterUser;
    }

    private getCurrentUser(username: string): Observable<User> {
        return this.usersService
            .getUserDetailsUsingGET(username)
            .pipe(tap((x: User) => x, err => this.deleteCookies()));
    }

    private getCurrentBetterUser(): Observable<Observable<BetterUser>> {
        return this._currentUser.pipe(
            map((user: User) => this.betterUserService.getCurrentUser(user))
        );
    }

    private deleteCookies(): void {
        this.cookieService.delete(this._authCookie);
        this.cookieService.delete(this._usernameCookie);
    }

    authorize(username: string, password: string): Observable<User> {
        const token: string = `${username}:${password}`;
        this.cookieService.set(this._authCookie, `Basic ${btoa(token)}`, 0.1);
        this.cookieService.set(this._usernameCookie, username);

        this._currentUser = this.getCurrentUser(username);
        this._currentBetterUser = this.getCurrentBetterUser();

        return this._currentUser;
    }

    isLoggedIn(): boolean {
        if (this.cookieService.check(this._authCookie)) {
            return true;
        } else {
            this.deleteCookies();
            return false;
        }
    }

    isAdmin(): Observable<boolean> {
        return this._currentUser.pipe(
            map((user: User) => {
                return user.role.toLowerCase().startsWith('admin');
            })
        );
    }

    isRegistrant(): Observable<boolean> {
        return this._currentUser.pipe(
            map((user: User) => {
                return user.role.toLowerCase().startsWith('registr');
            })
        );
    }

    isDoctor(): Observable<boolean> {
        return this._currentUser.pipe(
            map((user: User) => {
                return user.role.toLowerCase().startsWith('doctor');
            })
        );
    }

    logout() {
        this.deleteCookies();
        this.router.navigate(['login']);
    }

    getUserId(): Observable<Observable<number>> {
        return this._currentBetterUser.pipe(
            map((user$: Observable<BetterUser>) => {
                return user$.pipe(map((user: BetterUser) => user.id));
            })
        );
    }
}
