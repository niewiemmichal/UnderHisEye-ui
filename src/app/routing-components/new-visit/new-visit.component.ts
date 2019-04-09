import { Component } from '@angular/core';
import { ColumnInfoItem } from 'src/app/table/table.component';
import { MatDialog } from '@angular/material';
import { NewPatientDialog } from './new-patient-dialog/new-patient-dialog';
import { NewPatient } from 'src/app/new-patient/new-patient.component';

class Patient {
    name: string;
    surname: string;
    pesel: number;
}

@Component({
    selector: 'app-new-visit',
    templateUrl: './new-visit.component.html',
    styleUrls: ['./new-visit.component.scss'],
})
export class NewVisitComponent {
    patients: Patient[] = [
        {
            name: 'Baldwin',
            surname: 'Moss',
            pesel: 80797698020,
        },
        {
            name: 'West',
            surname: 'Jarvis',
            pesel: 78421133855,
        },
        {
            name: 'Kaufman',
            surname: 'Lawrence',
            pesel: 95467930091,
        },
        {
            name: 'Huffman',
            surname: 'Mcconnell',
            pesel: 91809272391,
        },
        {
            name: 'Hogan',
            surname: 'Giles',
            pesel: 73185547748,
        },
        {
            name: 'Harvey',
            surname: 'Graham',
            pesel: 88680885130,
        },
        {
            name: 'Calhoun',
            surname: 'Tyson',
            pesel: 97493170902,
        },
        {
            name: 'Joseph',
            surname: 'Young',
            pesel: 97344161608,
        },
        {
            name: 'Dixie',
            surname: 'Hardin',
            pesel: 96556166071,
        },
        {
            name: 'Shannon',
            surname: 'Barry',
            pesel: 88135932247,
        },
        {
            name: 'Gallegos',
            surname: 'Pace',
            pesel: 87853372488,
        },
        {
            name: 'Carol',
            surname: 'Bradshaw',
            pesel: 83428742963,
        },
    ];

    columns: ColumnInfoItem[] = [
        {
            columnDef: 'name',
            header: 'Name',
            cell: (element: any) => `${element.name}`,
        },
        {
            columnDef: 'surname',
            header: 'Surname',
            cell: (element: any) => `${element.surname}`,
        },
        {
            columnDef: 'pesel',
            header: 'PESEL',
            cell: (element: any) => `${element.pesel}`,
        },
    ];

    constructor(public dialog: MatDialog) { }

    selectedPatient: Patient = null;
    showTermSelection: boolean = false;

    rowSelected(row: Patient): void {
        this.selectedPatient = row;
    }

    nextClick(): void {
        this.showTermSelection = true;
    }

    openDialog(): void {
        this.dialog
            .open(NewPatientDialog)
            .afterClosed()
            .subscribe((response: NewPatient) => {
                if (response !== undefined) this.addPatient(response);
            });
    }

    addPatient(response: NewPatient): void {
        this.patients.unshift(response);
    }
}
