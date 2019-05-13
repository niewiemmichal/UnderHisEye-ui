import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/api/services';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/api/models';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private readonly authCookie: string = 'Authorization';
    private readonly usernameCookie: string = 'username';
    private currentUser: User = null;

    constructor(private usersService: UsersService, private cookieService: CookieService) {
        this.mapCurrentUserOrDeleteCookies(this.cookieService.get(this.usernameCookie));
    }

    authorize(username: string, password: string): Observable<User> {
        const token: string = `${username}:${password}`;
        this.cookieService.set(this.authCookie, `Basic ${btoa(token)}`, 0.1);
        this.cookieService.set(this.usernameCookie, username);

        return this.mapCurrentUserOrDeleteCookies(username);
    }

    private mapCurrentUserOrDeleteCookies(username: string): Observable<User> {
        return this.usersService.getUserDetailsUsingGET(username).pipe(
            tap(
                (x: User) => x,
                err => {
                    this.deleteCookies();
                }
            ),
            map((user: User) => {
                this.currentUser = user;
                return user;
            })
        );
    }

    private deleteCookies(): void {
        this.cookieService.delete(this.authCookie);
        this.cookieService.delete(this.usernameCookie);
    }

    isLoggedIn(): boolean {
        if (this.cookieService.check(this.authCookie)) {
            return true;
        } else {
            this.deleteCookies();
            return false;
        }
    }

    isAdmin(): boolean {
        return this.currentUser.role.toLowerCase().startsWith('admin');
    }
}
