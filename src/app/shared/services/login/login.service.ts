import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/api/services';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/api/models';
import { tap, map, switchMap } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { BetterUserService } from '../better-user/better-user.service';
import { BetterUser } from '../better-user/better-user';
import { RedirectionService } from '../redirection/redirection.service';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private readonly _authCookie: string = 'Authorization';
    private readonly _usernameCookie: string = 'username';
    private _currentUsername: string;
    private _currentUser: Observable<User>;
    private _currentUserSubject: ReplaySubject<User>;
    private _currentBetterUser: Observable<BetterUser>;
    private _currentBetterUserSubject: ReplaySubject<BetterUser>;

    constructor(
        private usersService: UsersService,
        private betterUserService: BetterUserService,
        private cookieService: CookieService,
        private redirectionService: RedirectionService
    ) {
        this._currentUsername = this.cookieService.get(this._usernameCookie);
        if(this._currentUsername.length > 0) {
            this._currentUser = this.getCurrentUser(this._currentUsername);
            this._currentBetterUser = this.getCurrentBetterUser();
        }
    }

    get currentUser(): Observable<BetterUser> {
        return this._currentBetterUser;
    }

    private getCurrentUser(username: string): Observable<User> {
        this._currentUserSubject = new ReplaySubject<BetterUser>(1); 
        this.usersService
            .getUserDetailsUsingGET(username)
            .pipe(tap((x: User) => x, err => this.deleteCookies()))
            .subscribe(u => this._currentUserSubject.next(u), 
                e => this._currentUserSubject.error(e), 
                () => this._currentUserSubject.complete());
        return this._currentUserSubject.asObservable();
    }

    private getCurrentBetterUser(): Observable<BetterUser> {
        this._currentBetterUserSubject = new ReplaySubject<BetterUser>(1); 
        this._currentUser.pipe(
            switchMap((user: User) => this.betterUserService.getCurrentUser(user))
        ).subscribe(bu => this._currentBetterUserSubject.next(bu),
            e => this._currentBetterUserSubject.error(e),
            () => this._currentBetterUserSubject.complete());
        return this._currentBetterUserSubject.asObservable();
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

    isLaborant(): Observable<boolean> {
        return this._currentUser.pipe(
            map((user: User) => {
                const role: string = user.role.toLowerCase()
                return role.startsWith('assist') || role.startsWith('super');
            })
        );
    }

    isAssistant(): Observable<boolean> {
        return this._currentUser.pipe(
            map((user: User) => {
                return user.role.toLowerCase().startsWith('assist');
            })
        );
    }

    isSupervisor(): Observable<boolean> {
        return this._currentUser.pipe(
            map((user: User) => {
                return user.role.toLowerCase().startsWith('super');
            })
        );
    }

    logout() {
        this.deleteCookies();
        this.redirectionService.redirectToLogin();
    }

    getUserId(): Observable<number> {
        return this._currentBetterUser.pipe(map((user: BetterUser) => user.id));
    }

    getUserRole(): Observable<
        'DOCTOR' | 'REGISTRANT' | 'ASSISTANT' | 'SUPERVISOR' | 'ADMINISTRATOR'
    > {
        return this._currentUser.pipe(
            map((user: User) => {
                return user.role;
            })
        );
    }
}
