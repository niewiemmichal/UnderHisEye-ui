import { Component, OnInit } from '@angular/core';
import { LaboratoryExaminationsService } from 'src/app/api/services';
import { LaboratoryExamination } from 'src/app/api/models';
import { ColumnInfoItem, SelectedOption } from 'src/app/shared/components/table/table.component';
import { MatDialog } from '@angular/material';
import {
    CancelExamDialogComponent,
    CancelExamDialogData,
} from './cancel-exam-dialog/cancel-exam-dialog.component';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
    selector: 'app-all-lab-exams',
    templateUrl: './all-lab-exams.component.html',
    styleUrls: ['./all-lab-exams.component.scss'],
})
export class AllLabExamsComponent implements OnInit {
    private _labExaminations: LaboratoryExamination[] = [];
    columns: ColumnInfoItem[] = [
        {
            columnDef: 'code',
            header: 'Code',
            cell: (exam: LaboratoryExamination) => exam.examination.code,
        },
        {
            columnDef: 'note',
            header: 'Note',
            cell: (exam: LaboratoryExamination) => exam.examination.name,
        },
    ];
    options: string[] = ['Cancel', 'Finish', 'Reject'];
    userId: number;

    constructor(
        private _labService: LaboratoryExaminationsService,
        private _dialog: MatDialog,
        private _loginService: LoginService
    ) {}

    ngOnInit() {
        this.updateExaminations();
        this._loginService.getUserId().subscribe((id: number) => (this.userId = id));
    }

    get labExaminations(): LaboratoryExamination[] {
        return this._labExaminations.filter(
            (labExamination: LaboratoryExamination) => labExamination.status == 'ORDERED'
        );
    }

    updateExaminations(): void {
        this._labService
            .getAllLaboratoryExaminationsUsingGET()
            .subscribe((labExaminations: LaboratoryExamination[]) => {
                this._labExaminations = labExaminations;
            });
    }

    optionSelected(selectedOption: SelectedOption): void {
        switch (selectedOption.optionName) {
            case 'cancel':
                this.cancelExam(selectedOption.row);
                break;

            default:
                break;
        }
    }

    cancelExam(labExamination: LaboratoryExamination): void {
        this._dialog
            .open(CancelExamDialogComponent, {
                data: new CancelExamDialogData(labExamination.id, this.userId),
            })
            .afterClosed()
            .subscribe((canceled: boolean) => {
                if (canceled) {
                    this.updateExaminations();
                }
            });
    }
}
