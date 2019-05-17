import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/api/services';
import { User } from 'src/app/api/models';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
    allUsers: User[];

    constructor(private usersService: UsersService) {}

    ngOnInit() {
        this.usersService
            .getAllUsersUsingGET()
            .subscribe((users: User[]) => (this.allUsers = users));
    }
}
