import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/services/login/login.service';
import { RedirectionService } from '../shared/services/redirection/redirection.service';

@Injectable({
    providedIn: 'root',
})
export class LabGuard implements CanActivate {
    constructor(
        private loginService: LoginService,
        private redirectionService: RedirectionService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let isLaborant$: Observable<boolean> = this.loginService.isLaborant();
        isLaborant$.subscribe((isLaborant: boolean) => {
            if (!isLaborant) {
                this.redirectionService.redirectToDefaultUrlByRole(this.loginService.getUserRole());
            }
        });

        return isLaborant$;
    }
}
