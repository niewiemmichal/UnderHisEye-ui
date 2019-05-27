import { Component, OnInit } from '@angular/core';
import { ColumnInfoItem, SelectedOption } from 'src/app/shared/components/table/table.component';
import { DoctorsService, VisitsService } from 'src/app/api/services';
import { Doctor, Visit } from 'src/app/api/models';
import {
    CancelVisitDialog,
    CancelVisitDialogData,
} from './cancel-visit-dialog/cancel-visit-dialog';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-visits-by-doctor',
    templateUrl: './visits-by-doctor.component.html',
    styleUrls: ['./visits-by-doctor.component.scss'],
})
export class VisitsByDoctorComponent implements OnInit {
    private _visits: Visit[] = [];
    doctors: Doctor[] = [];
    selectedDoctor: Doctor;

    columns: ColumnInfoItem[] = [
        {
            columnDef: 'name',
            header: 'Name',
            cell: (visit: Visit) => visit.patient.name,
        },
        {
            columnDef: 'surname',
            header: 'Surname',
            cell: (visit: Visit) => visit.patient.surname,
        },
        {
            columnDef: 'doctor',
            header: 'Doctor',
            cell: (visit: Visit) => `${visit.doctor.name} ${visit.doctor.surname}`,
        },
        { columnDef: 'date', header: 'Date', cell: (visit: Visit) => `${visit.date}` },
    ];

    options: string[] = ['Cancel'];

    constructor(
        private dialog: MatDialog,
        private doctorsService: DoctorsService,
        private visitsService: VisitsService
    ) {}

    ngOnInit(): void {
        this.doctorsService
            .getAllDoctorsUsingGET()
            .subscribe((doctors: Doctor[]) => (this.doctors = doctors));
        this.selectedDoctor = this.doctors[0];
        this.visitsService.getAllUsingGET().subscribe((visits: Visit[]) => (this._visits = visits));
    }

    get visits(): Visit[] {
        return this._visits.filter(
            (visit: Visit) =>
                (!this.selectedDoctor || visit.doctor.id === this.selectedDoctor.id) &&
                visit.status.toLowerCase().startsWith('regist')
        );
    }

    optionSelected(selectedOption: SelectedOption): void {
        switch (selectedOption.optionName) {
            case 'cancel':
                this.cancelVisit(selectedOption.row);
                break;

            default:
                break;
        }
    }

    cancelVisit(visit: Visit): void {
        this.dialog
            .open(CancelVisitDialog, {
                data: new CancelVisitDialogData(visit.id),
            })
            .afterClosed()
            .subscribe((canceled: boolean) => {
                if (canceled) {
                    this._visits.find(
                        (changedVisit: Visit) => changedVisit.id === visit.id
                    ).status = 'CANCELED';
                }
            });
    }
}
