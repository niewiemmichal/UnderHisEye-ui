import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewUserDialog } from './new-user/new-user-dialog';
import { ColumnInfoItem, SelectedOption } from 'src/app/shared/components/table/table.component';
import { BetterUserService } from 'src/app/shared/services/better-user/better-user.service';
import { BetterUser } from 'src/app/shared/services/better-user/better-user';

@Component({
    selector: 'app-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent {
    columnsInfo: ColumnInfoItem[] = [
        {
            columnDef: 'id',
            header: 'Id',
            cell: (element: BetterUser) => `${element.id == null ? '' : element.id}`,
        },
        {
            columnDef: 'username',
            header: 'Username',
            cell: (element: BetterUser) => `${element.username == null ? '' : element.username}`,
        },
        {
            columnDef: 'name',
            header: 'Name',
            cell: (element: BetterUser) => `${element.name == null ? '' : element.name}`,
        },
        {
            columnDef: 'surname',
            header: 'Surname',
            cell: (element: BetterUser) => `${element.surname == null ? '' : element.surname}`,
        },
        {
            columnDef: 'role',
            header: 'Role',
            cell: (element: BetterUser) =>
                `${element.role == null ? '' : element.role.toLowerCase()}`,
        },
        {
            columnDef: 'gmc',
            header: 'GMC Number',
            cell: (element: BetterUser) => `${element.gmcNumber == null ? '' : element.gmcNumber}`,
        },
    ];

    private _allUsers: BetterUser[] = [];

    get allUsers(): BetterUser[] {
        return this._allUsers.sort((n1: BetterUser, n2: BetterUser) => n1.id - n2.id);
    }

    constructor(private userService: BetterUserService, public dialog: MatDialog) {}

    ngOnInit() {
        this.userService.getAllUsers().subscribe((users: BetterUser[]) => {
            this._allUsers = this._allUsers.concat(users);
        });
    }

    openDialog(): void {
        this.dialog
            .open(NewUserDialog)
            .afterClosed()
            .subscribe((newUser: BetterUser) => {
                if (newUser != null) {
                    this._allUsers.push(newUser);
                }
            });
    }
}
