import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    CanActivate,
    CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/services/login/login.service';
import { RedirectionService } from '../shared/redirection/redirection.service';

@Injectable({
    providedIn: 'root',
})
export class AppGuard implements CanActivateChild, CanActivate {
    constructor(private loginService: LoginService, private redirectService: RedirectionService) {}

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.loginService.isLoggedIn()) {
            return true;
        } else {
            this.redirectService.redirectToLogin();
            return false;
        }
    }

    canActivate(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.loginService.isLoggedIn()) {
            if (childRoute.firstChild == null) {
                this.redirectService.redirectToDefaultUrlByRole(this.loginService.getUserRole());
            }
            return true;
        } else {
            this.redirectService.redirectToLogin();
            return false;
        }
    }
}
