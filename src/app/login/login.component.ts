import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login/login.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

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
        private router: Router,
        private snackBar: MatSnackBar
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
        this.router.navigateByUrl('');
    }
}
