import { Component } from '@angular/core';
import { LoginService } from '../shared/services/login/login.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { RedirectionService } from '../shared/services/redirection/redirection.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm: FormGroup = new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
    });

    constructor(
        private loginService: LoginService,
        private snackBar: MatSnackBar,
        private redirectionService: RedirectionService
    ) {}

    onSubmit(): void {
        this.loginService
            .authorize(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe(
                _ => this.navigateToApp(),
                _ => {
                    this.snackBar.open('Failed login', 'Ok', {
                        duration: 3000,
                    });
                }
            );
    }

    navigateToApp(): void {
        this.redirectionService.redirectToApp();
    }
}
