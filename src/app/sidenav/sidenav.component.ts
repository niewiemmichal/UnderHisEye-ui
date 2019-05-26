import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { LoginService } from '../shared/services/login/login.service';
import { BetterUser } from '../shared/services/better-user/better-user';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
    username: string = 'Username';
    title: string = 'Title';
    isAdmin$: Observable<boolean>;
    isRegistrant$: Observable<boolean>;
    currentUser: BetterUser;

    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(map(result => result.matches));

    constructor(
        private breakpointObserver: BreakpointObserver,
        private loginService: LoginService
    ) {}

    ngOnInit(): void {
        this.isAdmin$ = this.loginService.isAdmin();
        this.isRegistrant$ = this.loginService.isRegistrant();
        this.loginService.currentUser.subscribe((user$: Observable<BetterUser>) =>
            user$.subscribe((user: BetterUser) => (this.currentUser = user))
        );
    }

    logout(): void {
        this.loginService.logout();
    }
}
