import { Component, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../api/services';
import { LoginService } from '../shared/services/login/login.service';

export interface LoginEvent {
    AccountType: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private usersService: UsersService, private loginService: LoginService) {}

    @Output()
    loggedIn: EventEmitter<LoginEvent> = new EventEmitter();

    loginButtonClick(name: string, password: string): void {
        // const accountType: string = name.trim().toLowerCase();
        // this.loggedIn.emit({ AccountType: accountType });
        this.loginService
            .authorize(name, password)
            .subscribe(_ => console.log('authorized'), _ => console.log('failed'));
    }
}
