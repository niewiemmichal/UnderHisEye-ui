import { Component, OnInit } from '@angular/core';
import { VisitsService } from 'src/app/api/services';
import { VisitWithExaminationsDto } from 'src/app/api/models';
import { ColumnInfoItem } from 'src/app/shared/components/table/table.component';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { BetterUser } from 'src/app/shared/services/better-user/better-user';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { VisitDetailsDialogComponent } from './visit-details-dialog/visit-details-dialog.component';

@Component({
    selector: 'app-past-doctors-visits',
    templateUrl: './past-doctors-visits.component.html',
    styleUrls: ['./past-doctors-visits.component.scss'],
})
export class PastDoctorsVisitsComponent implements OnInit {
    private _visits: VisitWithExaminationsDto[] = [];
    private _doctor: BetterUser;

    columns: ColumnInfoItem[] = [
        {
            columnDef: 'patient',
            header: 'Patient',
            cell: (visit: VisitWithExaminationsDto) =>
                `${visit.visit.patient.name} ${visit.visit.patient.surname}`,
        },
        {
            columnDef: 'date',
            header: 'Visit date',
            cell: (visit: VisitWithExaminationsDto) => visit.visit.date.split('T')[0],
        },
        {
            columnDef: 'time',
            header: 'Visit time',
            cell: (visit: VisitWithExaminationsDto) => visit.visit.date.split('T')[1],
        },
        {
            columnDef: 'status',
            header: 'Status',
            cell: (visit: VisitWithExaminationsDto) => visit.visit.status.toLowerCase(),
        },
    ];

    filterStatusOptions: string[] = ['ALL', 'FINISHED', 'CANCELED'];
    filterStatus: 'ALL' | 'FINISHED' | 'CANCELED' = 'ALL';
    filterName: string = '';
    filterSurname: string = '';

    constructor(
        private _visitsService: VisitsService,
        private _loginService: LoginService,
        private _dialog: MatDialog
    ) {}

    ngOnInit() {
        this._loginService.currentUser
            .pipe(
                switchMap((user: BetterUser) => {
                    this._doctor = user;
                    return this._visitsService.getAllFatVisitsUsingGET();
                })
            )
            .subscribe((visits: VisitWithExaminationsDto[]) => {
                this._visits = visits.filter(
                    (visit: VisitWithExaminationsDto) =>
                        visit.visit.status !== 'REGISTERED' &&
                        visit.visit.doctor.id === this._doctor.id
                );
                console.log(this._visits);
            });
    }

    get visits(): VisitWithExaminationsDto[] {
        return this._visits.filter(
            (visit: VisitWithExaminationsDto) =>
                (this.filterStatus === 'ALL' || visit.visit.status === this.filterStatus) &&
                visit.visit.patient.name.toLowerCase().includes(this.filterName) &&
                visit.visit.patient.surname.toLowerCase().includes(this.filterSurname)
        );
    }

    selectedRow(visit: VisitWithExaminationsDto): void {
        if (visit != null) {
            this._dialog.open(VisitDetailsDialogComponent, { data: visit });
        }
    }
}
