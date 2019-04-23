import { Component } from '@angular/core';
import { ColumnInfoItem, SelectedOption } from '../shared/components/table/table.component';

class User {
    name: string;
    surname: string;
    role: string;
}

@Component({
    selector: 'app-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent {
    rules: string[] = ['admin', 'doctor', 'register', 'labTechnician', 'labDirector'];

    users: User[] = [
        { name: 'Rober', surname: 'Robertson', role: 'register' },
        { name: 'Adam', surname: 'Adamson', role: 'admin' },
        { name: 'Lincoln', surname: 'Lincolnson', role: 'labTechnician' },
        { name: 'Drew', surname: 'Drewson', role: 'labDirector' },
        { name: 'Dan', surname: 'Danson', role: 'doctor' },
    ];

    columnsInfo: ColumnInfoItem[] = [
        { columnDef: 'name', header: 'Name', cell: (element: any) => `${element.name}` },
        { columnDef: 'surname', header: 'Surname', cell: (element: any) => `${element.surname}` },
        { columnDef: 'role', header: 'Role', cell: (element: any) => `${element.role}` },
    ];

    rowOptions: string[] = ['change'];

    optionSelected(selectedOption: SelectedOption): void {
        console.log(selectedOption.optionName);
    }
}
