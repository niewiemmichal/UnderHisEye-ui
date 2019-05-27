import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColumnInfoItem, SelectedOption } from 'src/app/shared/components/table/table.component';
import { VisitsService } from 'src/app/api/services';
import { Visit } from 'src/app/api/models';
import {
    CancelVisitDialog,
    CancelVisitDialogData,
} from '../visits-by-doctor/cancel-visit-dialog/cancel-visit-dialog';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-doctors-visits',
    templateUrl: './doctors-visits.component.html',
    styleUrls: ['./doctors-visits.component.scss'],
})
export class DoctorsVisitsComponent implements OnInit {
    private _visits: Visit[] = [];

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
        { columnDef: 'date', header: 'Date', cell: (visit: Visit) => `${visit.date}` },
        { columnDef: 'status', header: 'Status', cell: (visit: Visit) => `${visit.status}` },
    ];
    dateForm: FormControl = new FormControl(new Date());
    isSelected: boolean = false;
    selectedVisit: Visit;

    options: string[] = ['Accept', 'Cancel'];

    constructor(private visitsService: VisitsService, private dialog: MatDialog) {}

    ngOnInit(): void {
        this.visitsService.getAllUsingGET().subscribe((visits: Visit[]) => (this._visits = visits));
    }

    get visits(): Visit[] {
        return this._visits.filter(
            (visit: Visit) =>
                new Date(visit.date) >= this.dateForm.value &&
                !visit.status.toLowerCase().startsWith('cancel')
        );
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
                        (changedVisit: Visit) => changedVisit.id === visit.id
                    ).status = 'CANCELED';
                }
            });
    }

    acceptVisit(visit: Visit): void {
        this.selectedVisit = visit;
        this.isSelected = true;
    }
}
