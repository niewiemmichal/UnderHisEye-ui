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
import { BetterUser } from 'src/app/shared/services/better-user/better-user';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-all-lab-exams',
    templateUrl: './all-lab-exams.component.html',
    styleUrls: ['./all-lab-exams.component.scss'],
})
export class AllLabExamsComponent implements OnInit {
    private _labExaminations: LaboratoryExamination[] = [];
    columns: ColumnInfoItem[] = [];
    options: string[] = [];
    userId: number;
    selectedExam: LaboratoryExamination;
    isSelected: boolean = false;
    currentUser: BetterUser;
    examFilters: ((exam: LaboratoryExamination) => boolean)[] = [];

    constructor(
        private _labService: LaboratoryExaminationsService,
        private _dialog: MatDialog,
        private _loginService: LoginService
    ) {}

    ngOnInit() {
        this.updateExaminations();
        this._loginService.getUserId().subscribe((id: number) => (this.userId = id));
        this._loginService.currentUser.subscribe((user: BetterUser) => {
            this.currentUser = user;
            this.setOptions(user.role);
            this.setColumns(user.role);
            this.setFilterOptions(user.role);
        });
    }

    private setOptions(
        role: 'DOCTOR' | 'REGISTRANT' | 'ASSISTANT' | 'SUPERVISOR' | 'ADMINISTRATOR'
    ): void {
        switch (role) {
            case 'ASSISTANT':
                this.options.push('Cancel', 'Accept');
                break;

            case 'SUPERVISOR':
                this.options.push('Reject', 'Approve');
                break;

            default:
                break;
        }
    }

    private setColumns(
        role: 'DOCTOR' | 'REGISTRANT' | 'ASSISTANT' | 'SUPERVISOR' | 'ADMINISTRATOR'
    ): void {
        switch (role) {
            case 'ASSISTANT':
                this.columns.push(
                    {
                        columnDef: 'patient',
                        header: 'Patient',
                        cell: (exam: LaboratoryExamination) =>
                            `${exam.visit.patient.name} ${exam.visit.patient.surname}`,
                    },
                    {
                        columnDef: 'code',
                        header: 'Code',
                        cell: (exam: LaboratoryExamination) => exam.examination.code,
                    },
                    {
                        columnDef: 'exam',
                        header: 'Exam',
                        cell: (exam: LaboratoryExamination) => exam.examination.name,
                    },
                    {
                        columnDef: 'orderDate',
                        header: 'Order Date',
                        cell: (exam: LaboratoryExamination) => exam.orderDate,
                    }
                );
                break;

            case 'SUPERVISOR':
                this.columns.push(
                    {
                        columnDef: 'exam',
                        header: 'Examination',
                        cell: (exam: LaboratoryExamination) =>
                            `${exam.examination.code}: ${exam.examination.name}`,
                    },
                    {
                        columnDef: 'assistant',
                        header: 'Assistant',
                        cell: (exam: LaboratoryExamination) =>
                            `${exam.assistant.name} ${exam.assistant.surname}`,
                    },
                    {
                        columnDef: 'result',
                        header: 'Result',
                        cell: (exam: LaboratoryExamination) => exam.result,
                    },
                    {
                        columnDef: 'completionDate',
                        header: 'Completion Date',
                        cell: (exam: LaboratoryExamination) => exam.completionDate,
                    }
                );
                break;

            default:
                break;
        }
    }

    private setFilterOptions(
        role: 'DOCTOR' | 'REGISTRANT' | 'ASSISTANT' | 'SUPERVISOR' | 'ADMINISTRATOR'
    ): void {
        switch (role) {
            case 'ASSISTANT':
                this.examFilters.push((exam: LaboratoryExamination) => exam.status === 'ORDERED');
                break;

            case 'SUPERVISOR':
                this.examFilters.push((exam: LaboratoryExamination) => exam.status === 'FINISHED');
                break;

            default:
                break;
        }
    }

    get labExaminations(): LaboratoryExamination[] {
        return this._labExaminations.filter((labExamination: LaboratoryExamination) => {
            return this.examFilters
                .map((examFitler: (exam: LaboratoryExamination) => boolean) => {
                    return examFitler(labExamination);
                })
                .every((value: boolean) => value === true);
        });
    }

    private updateExaminations(): void {
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

            case 'accept':
                this.selectExam(selectedOption.row);
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

    selectExam(labExamination: LaboratoryExamination): void {
        this.selectedExam = labExamination;
        this.isSelected = true;
    }

    deselectExam(): void {
        this.isSelected = false;
        this.selectedExam = null;
    }

    finished(finished: boolean): void {
        this.deselectExam();
        if (finished) {
            this.updateExaminations();
        }
    }
}
