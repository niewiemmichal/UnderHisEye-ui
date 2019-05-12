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
    private loggedInUser: User = null;

    constructor(private usersService: UsersService, private cookieService: CookieService) {}

    authorize(username: string, password: string): Observable<User> {
        const token: string = `${username}:${password}`;
        this.cookieService.set('Authorization', `Basic ${btoa(token)}`, 0.1);

        return this.usersService.getUserDetailsUsingGET(username).pipe(
            tap((x: User) => x, err => this.cookieService.delete('Authorization')),
            map((user: User) => {
                this.loggedInUser = user;
                return user;
            })
        );
    }
}
