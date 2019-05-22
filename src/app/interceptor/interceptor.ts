import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, timeout, repeatWhen } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Apply the headers
        req = req.clone({
            setHeaders: { Authorization: this.getAuthorizationHeader() },
        });

        // Also handle errors globally
        return next.handle(req).pipe(
            tap(
                x => x,
                err => {
                    // Handle this err
                    console.error(`Error performing request, status code = ${err.status}`);
                }
            ),
            timeout(5000)
        );
    }

    getAuthorizationHeader(): string {
        return this.cookieService.get('Authorization');
    }
}
