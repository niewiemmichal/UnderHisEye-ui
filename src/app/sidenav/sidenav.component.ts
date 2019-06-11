import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { LoginService } from '../shared/services/login/login.service';
import { BetterUser } from '../shared/services/better-user/better-user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
    username: string = 'Username';
    isAdmin$: Observable<boolean>;
    isRegistrant$: Observable<boolean>;
    isDoctor$: Observable<boolean>;
    isLaborant$: Observable<boolean>;
    currentUser: BetterUser;

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(map(result => result.matches));

    constructor(
        private breakpointObserver: BreakpointObserver,
        private loginService: LoginService,
        private router: Router
    ) {}

    get title(): string {
        switch (this.router.url) {
            case '/users':
                return 'All users';
            case '/new-icd':
                return 'New ICD';
            case '/visits-by-doctor':
                return 'All visits';
            case '/new-visit':
                return 'New visit';
            case '/expected-visits':
                return 'Expected visits';
            case '/past-visits':
                return 'Past visits';
            case '/lab-exams':
                return 'Current examinations';
            case '/past-exams':
                return 'Past examinations';

            default:
                return 'Title';
        }
    }

    ngOnInit(): void {
        this.isAdmin$ = this.loginService.isAdmin();
        this.isRegistrant$ = this.loginService.isRegistrant();
        this.isDoctor$ = this.loginService.isDoctor();
        this.isLaborant$ = this.loginService.isLaborant();
        this.loginService.currentUser.subscribe((user: BetterUser) => (this.currentUser = user));
    }

    logout(): void {
        this.loginService.logout();
    }
}
