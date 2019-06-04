import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class RedirectionService {
    constructor(private _router: Router) {}

    redirectToDefaultUrlByRole(
        role: Observable<'DOCTOR' | 'REGISTRANT' | 'ASSISTANT' | 'SUPERVISOR' | 'ADMINISTRATOR'>
    ): void {
        role.subscribe(
            (role: 'DOCTOR' | 'REGISTRANT' | 'ASSISTANT' | 'SUPERVISOR' | 'ADMINISTRATOR') => {
                this._router.navigate([this.getDefaultUrlByRole(role)]);
            }
        );
    }

    redirectToLogin(): void {
        this._router.navigate(['login']);
    }

    redirectToApp(): void {
        this._router.navigate(['']);
    }

    private getDefaultUrlByRole(
        role: 'DOCTOR' | 'REGISTRANT' | 'ASSISTANT' | 'SUPERVISOR' | 'ADMINISTRATOR'
    ): string {
        switch (role) {
            case 'DOCTOR':
                return 'doctors-visits';

            case 'REGISTRANT':
                return 'visits-by-doctor';

            case 'ASSISTANT':
                return 'lab-exams';

            case 'SUPERVISOR':
                return 'lab-exams';

            case 'ADMINISTRATOR':
                return 'users';

            default:
                return;
        }
    }
}
