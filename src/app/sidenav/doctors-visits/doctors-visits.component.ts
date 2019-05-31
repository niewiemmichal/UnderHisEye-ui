import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColumnInfoItem, SelectedOption } from 'src/app/shared/components/table/table.component';
import { VisitsService } from 'src/app/api/services';
import { Visit, VisitWithExaminationsDto } from 'src/app/api/models';
import {
    CancelVisitDialog,
    CancelVisitDialogData,
} from '../visits-by-doctor/cancel-visit-dialog/cancel-visit-dialog';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-doctors-visits',
    templateUrl: './doctors-visits.component.html',
    styleUrls: ['./doctors-visits.component.scss'],
})
export class DoctorsVisitsComponent implements OnInit {
    private _visits: VisitWithExaminationsDto[] = [];

    columns: ColumnInfoItem[] = [
        {
            columnDef: 'name',
            header: 'Name',
            cell: (visit: VisitWithExaminationsDto) => visit.visit.patient.name,
        },
        {
            columnDef: 'surname',
            header: 'Surname',
            cell: (visit: VisitWithExaminationsDto) => visit.visit.patient.surname,
        },
        {
            columnDef: 'date',
            header: 'Date',
            cell: (visit: VisitWithExaminationsDto) => `${visit.visit.date}`,
        },
        {
            columnDef: 'status',
            header: 'Status',
            cell: (visit: VisitWithExaminationsDto) => `${visit.visit.status}`,
        },
    ];
    dateForm: FormControl = new FormControl(new Date());
    isSelected: boolean = false;
    selectedVisit: VisitWithExaminationsDto;
    doctorId: Observable<number>;

    options: string[] = ['Accept', 'Cancel'];

    constructor(
        private visitsService: VisitsService,
        private dialog: MatDialog,
        private loginService: LoginService
    ) {}

    ngOnInit(): void {
        this.doctorId = this.loginService.getUserId();
        this.doctorId.subscribe((id: number) => this.getAllVisits(id));
    }

    get visits(): VisitWithExaminationsDto[] {
        return this._visits.filter(
            (visit: VisitWithExaminationsDto) =>
                new Date(visit.visit.date) >= this.dateForm.value &&
                !visit.visit.status.toLowerCase().startsWith('cancel')
        );
    }

    getAllVisits(id: number): void {
        this.visitsService
            .getAllFatVisitsUsingGET1(id)
            .subscribe((visits: VisitWithExaminationsDto[]) => {
                console.log(visits);
                this._visits = visits;
            });
    }

    optionSelected(selectedOption: SelectedOption): void {
        switch (selectedOption.optionName) {
            case 'cancel':
                this.cancelVisit(selectedOption.row);
                break;

            case 'accept':
                this.acceptVisit(selectedOption.row);
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
                        (changedVisit: VisitWithExaminationsDto) =>
                            changedVisit.visit.id === visit.id
                    ).visit.status = 'CANCELED';
                }
            });
    }

    acceptVisit(visit: VisitWithExaminationsDto): void {
        this.selectedVisit = visit;
        this.isSelected = true;
    }
}
