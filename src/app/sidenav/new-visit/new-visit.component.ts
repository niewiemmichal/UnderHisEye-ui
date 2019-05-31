import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ColumnInfoItem } from 'src/app/shared/components/table/table.component';
import { PatientService, RegistrantsService } from 'src/app/api/services';
import { Patient, Registrant } from 'src/app/api/models';
import {
    VisitFinalizerDialog,
    VisitFinalizerDialogData,
} from './visit-finalizer-dialog/visit-finalizer-dialog';
import { NewPatientDialog } from './new-patient-dialog/new-patient-dialog';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-new-visit',
    templateUrl: './new-visit.component.html',
    styleUrls: ['./new-visit.component.scss'],
})
export class NewVisitComponent implements OnInit {
    private _patients: Patient[] = [];
    showTermSelection: boolean = false;
    filterName: string = '';
    filterSurname: string = '';
    selectedPatient: Patient;
    registrantId: number;

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

    constructor(
        private dialog: MatDialog,
        private patientService: PatientService,
        private loginService: LoginService
    ) {}

    ngOnInit(): void {
        this.patientService.getAllPatientsUsingGET().subscribe((patients: Patient[]) => {
            this._patients = patients;
        });
        this.loginService.getUserId().subscribe((id: number) => (this.registrantId = id));
    }

    get patients(): Patient[] {
        return this._patients.filter(
            (p: Patient) =>
                p.name.toLowerCase().includes(this.filterName.toLowerCase()) &&
                p.name.toLowerCase().includes(this.filterSurname.toLowerCase())
        );
    }

    rowSelected(row: Patient): void {
        this.selectedPatient = row;
    }

    openVisitDialog(): void {
        this.dialog
            .open(VisitFinalizerDialog, {
                data: new VisitFinalizerDialogData(this.selectedPatient.id, this.registrantId),
            })
            .afterClosed()
            .subscribe();
    }

    openPatientDialog(): void {
        this.dialog
            .open(NewPatientDialog)
            .afterClosed()
            .subscribe((response: Patient) => {
                if (response != null) {
                    this.addPatient(response);
                }
            });
    }

    addPatient(response: Patient): void {
        this.patients.unshift(response);
    }
}
