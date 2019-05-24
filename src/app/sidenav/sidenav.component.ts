import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { LoginService } from '../shared/services/login/login.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
    username: string = 'Username';
    title: string = 'Title';
    isAdmin$: Observable<boolean>;

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(map(result => result.matches));

    constructor(
        private breakpointObserver: BreakpointObserver,
        private loginService: LoginService
    ) {}

    ngOnInit(): void {
        this.isAdmin$ = this.loginService.isAdmin();
    }

    logout(): void {
        this.loginService.logout();
    }
}
