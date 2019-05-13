import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { LoginService } from '../shared/services/login/login.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
    title: string = 'Title';

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(map(result => result.matches));

    constructor(
        private breakpointObserver: BreakpointObserver,
        private loginService: LoginService
    ) {}

    isAdmin(): Observable<boolean> {
        return this.loginService.isAdmin();
    }
}
