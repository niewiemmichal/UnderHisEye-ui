import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewPatientDialog } from './new-patient-dialog/new-patient-dialog';
import { ColumnInfoItem } from 'src/app/shared/components/table/table.component';
import { PatientService } from 'src/app/api/services';
import { Patient } from 'src/app/api/models';

@Component({
    selector: 'app-new-visit',
    templateUrl: './new-visit.component.html',
    styleUrls: ['./new-visit.component.scss'],
})
export class NewVisitComponent implements OnInit {
    patients: Patient[] = [];
    selectedPatient: Patient;
    showTermSelection: boolean = false;

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
            cell: (element: any) => `${element.personalIdentityNumber}`,
        },
    ];


    constructor(public dialog: MatDialog, private patientService: PatientService) {}

    ngOnInit(): void {
        this.patientService.getAllPatientsUsingGET().subscribe((patients: Patient[]) => {
            this.patients = patients;
            console.log(this.patients);
        });
    }

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
            .subscribe((response: Patient) => {
                if (response !== undefined) {
                    this.addPatient(response);
                }
            });
    }

    addPatient(response: Patient): void {
        this.patients.unshift(response);
    }
}
