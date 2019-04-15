import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginEvent } from './login/login.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title: string = 'Title';

    isLogged: boolean = false;
    isRegisterLogged: boolean = false;
    isDoctorLogged: boolean = false;
    isAdminLogged: boolean = false;
    isLabTechnicianLogged: boolean = false;
    isLabDirectorLogged: boolean = false;

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(map(result => result.matches));

    constructor(private breakpointObserver: BreakpointObserver) {}

    loggedIn(event: LoginEvent): void {
        this.title = event.AccountType;
        this.isLogged = true;
        switch (event.AccountType) {
            case 'register':
                this.isRegisterLogged = true;
                break;
            case 'doctor':
                this.isDoctorLogged = true;
                break;
            case 'admin':
                this.isAdminLogged = true;
                break;
            case 'labtechnician':
                this.isLabTechnicianLogged = true;
                break;
            case 'labdirector':
                this.isLabDirectorLogged = true;
                break;
        }
    }
}
