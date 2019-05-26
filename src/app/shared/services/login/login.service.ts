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
    private readonly authCookie: string = 'Authorization';
    private readonly usernameCookie: string = 'username';
    private currentUsername: string;
    private currentUser: Observable<User>;
    private currentBetterUser: Observable<Observable<BetterUser>>;

    constructor(
        private usersService: UsersService,
        private betterUserService: BetterUserService,
        private cookieService: CookieService,
        private router: Router
    ) {
        this.currentUsername = this.cookieService.get(this.usernameCookie);
        this.currentUser = this.getCurrentUser(this.currentUsername);
        this.currentBetterUser = this.getCurrentBetterUser();
    }

    private getCurrentUser(username: string): Observable<User> {
        return this.usersService
            .getUserDetailsUsingGET(username)
            .pipe(tap((x: User) => x, err => this.deleteCookies()));
    }

    private getCurrentBetterUser(): Observable<Observable<BetterUser>> {
        return this.currentUser.pipe(
            map((user: User) => this.betterUserService.getCurrentUser(user))
        );
    }

    private deleteCookies(): void {
        this.cookieService.delete(this.authCookie);
        this.cookieService.delete(this.usernameCookie);
    }

    authorize(username: string, password: string): Observable<User> {
        const token: string = `${username}:${password}`;
        this.cookieService.set(this.authCookie, `Basic ${btoa(token)}`, 0.1);
        this.cookieService.set(this.usernameCookie, username);

        this.currentUser = this.getCurrentUser(username);
        this.currentBetterUser = this.getCurrentBetterUser();

        return this.currentUser;
    }

    isLoggedIn(): boolean {
        if (this.cookieService.check(this.authCookie)) {
            return true;
        } else {
            this.deleteCookies();
            return false;
        }
    }

    isAdmin(): Observable<boolean> {
        return this.currentUser.pipe(
            map((user: User) => {
                return user.role.toLowerCase().startsWith('admin');
            })
        );
    }

    isRegistrant(): Observable<boolean> {
        return this.currentUser.pipe(
            map((user: User) => {
                return user.role.toLowerCase().startsWith('registr');
            })
        );
    }

    logout() {
        this.deleteCookies();
        this.router.navigate(['login']);
    }

    getUserId(): Observable<Observable<number>> {
        return this.currentBetterUser.pipe(
            map((user$: Observable<BetterUser>) => {
                return user$.pipe(map((user: BetterUser) => user.id));
            })
        );
    }
}
