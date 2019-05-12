import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    CanActivate,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/services/login/login.service';

@Injectable({
    providedIn: 'root',
})
export class AppGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.loginService.isLoggedIn()) {
            this.router.navigate(['login']);
            return false;
        } else {
            return true;
        }
    }
}
