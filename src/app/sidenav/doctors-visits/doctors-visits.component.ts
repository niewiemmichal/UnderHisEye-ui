import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColumnInfoItem, SelectedOption } from 'src/app/shared/components/table/table.component';
import { VisitsService, LaboratoryExaminationsService } from 'src/app/api/services';
import { Visit, VisitWithExaminationsDto } from 'src/app/api/models';
import {
    CancelVisitDialog,
    CancelVisitDialogData,
} from '../visits-by-doctor/cancel-visit-dialog/cancel-visit-dialog';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { Observable } from 'rxjs';

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
            cell: (visit: VisitWithExaminationsDto) => new Date(visit.visit.date).toDateString(),
        },
        {
            columnDef: 'time',
            header: 'Time',
            cell: (visit: VisitWithExaminationsDto) =>
                new Date(visit.visit.date).toLocaleTimeString(),
        },
    ];
    dateForm: FormControl = new FormControl(new Date());
    isSelected: boolean = false;
    selectedVisit: VisitWithExaminationsDto;
    selectedPastHistory: VisitWithExaminationsDto[];
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
                visit.visit.status.toLowerCase().startsWith('regi')
        );
    }

    private getAllVisits(id: number): void {
        this.visitsService
            .getAllFatVisitsUsingGET1(id)
            .subscribe((visits: VisitWithExaminationsDto[]) => {
                this._visits = visits;
            });
    }

    optionSelected(selectedOption: SelectedOption): void {
        switch (selectedOption.optionName) {
            case 'cancel':
                this.cancelVisit(selectedOption.row);
                break;

            case 'accept':
                this.selectVisit(selectedOption.row);
                break;

            default:
                break;
        }
    }

    private cancelVisit(visit: Visit): void {
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

    private selectVisit(selected: VisitWithExaminationsDto): void {
        this.selectedVisit = selected;
        this.selectedPastHistory = this._visits.filter(
            (visit: VisitWithExaminationsDto) =>
                visit.visit.patient.id === selected.visit.patient.id &&
                visit.visit.status === 'FINISHED'
        );
        this.isSelected = true;
    }

    private deselectVisit(): void {
        this.isSelected = false;
        this.selectedVisit = null;
    }

    endedVisit(ended: boolean): void {
        if (ended) {
            this.deselectVisit();
            this.doctorId.subscribe((id: number) => this.getAllVisits(id));
        } else {
            this.deselectVisit();
        }
    }
}
