import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewUserDialog } from './new-user/new-user-dialog';
import { ColumnInfoItem, SelectedOption } from 'src/app/shared/components/table/table.component';
import {
    BetterUserService,
    BetterUser,
} from 'src/app/shared/services/better-user/better-user.service';

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
            cell: (element: BetterUser) => `${element.id === undefined ? '' : element.id}`,
        },
        {
            columnDef: 'username',
            header: 'Username',
            cell: (element: BetterUser) =>
                `${element.username === undefined ? '' : element.username}`,
        },
        {
            columnDef: 'name',
            header: 'Name',
            cell: (element: BetterUser) => `${element.name === undefined ? '' : element.name}`,
        },
        {
            columnDef: 'surname',
            header: 'Surname',
            cell: (element: BetterUser) =>
                `${element.surname === undefined ? '' : element.surname}`,
        },
        {
            columnDef: 'role',
            header: 'Role',
            cell: (element: BetterUser) =>
                `${element.role === undefined ? '' : element.role.toLowerCase()}`,
        },
        {
            columnDef: 'gmc',
            header: 'GMC Number',
            cell: (element: BetterUser) =>
                `${element.gmcNumber === undefined ? '' : element.gmcNumber}`,
        },
    ];

    rowOptions: string[] = ['Change'];

    allUsers: BetterUser[] = [];

    constructor(private userService: BetterUserService, public dialog: MatDialog) {}

    ngOnInit() {
        this.userService.getAllUsers().subscribe((users: BetterUser[]) => {
            this.allUsers = users;
        });
    }

    optionSelected(selectedOption: SelectedOption): void {
        console.log(selectedOption.optionName);
    }

    openDialog(): void {
        this.dialog
            .open(NewUserDialog)
            .afterClosed()
            .subscribe((response: any) => {
                if (response !== undefined) {
                    console.log('dialog works', response);
                }
            });
    }
}
