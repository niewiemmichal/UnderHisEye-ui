import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private loginService: LoginService, private router: Router) {}

    loginButtonClick(name: string, password: string): void {
        this.loginService
            .authorize(name, password)
            .subscribe(_ => this.navigateToApp(), _ => console.log('failed'));
    }

    navigateToApp(): void {
        this.router.navigateByUrl('');
    }
}
