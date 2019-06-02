import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/services/login/login.service';
import { RedirectionService } from '../shared/services/redirection/redirection.service';

@Injectable({
    providedIn: 'root',
})
export class AssistantGuard implements CanActivate {
    constructor(
        private loginService: LoginService,
        private redirectionService: RedirectionService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let isAssistant$: Observable<boolean> = this.loginService.isAssistant();
        isAssistant$.subscribe((isAssistant: boolean) => {
            if (!isAssistant) {
                this.redirectionService.redirectToDefaultUrlByRole(this.loginService.getUserRole());
            }
        });

        return isAssistant$;
    }
}
