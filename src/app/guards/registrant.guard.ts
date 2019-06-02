import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/services/login/login.service';
import { RedirectionService } from '../shared/services/redirection/redirection.service';

@Injectable({
    providedIn: 'root',
})
export class RegistrantGuard implements CanActivate {
    constructor(
        private loginService: LoginService,
        private redirectionService: RedirectionService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let isRegistrant$: Observable<boolean> = this.loginService.isRegistrant();
        isRegistrant$.subscribe((isRegistrant: boolean) => {
            if (!isRegistrant) {
                this.redirectionService.redirectToDefaultUrlByRole(this.loginService.getUserRole());
            }
        });

        return isRegistrant$;
    }
}
