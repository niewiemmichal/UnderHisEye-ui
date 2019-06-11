import { Component, OnInit } from '@angular/core';
import { LaboratoryExaminationsService } from 'src/app/api/services';
import { LaboratoryExamination } from 'src/app/api/models';
import { ColumnInfoItem, SelectedOption } from 'src/app/shared/components/table/table.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import {
    CancelExamDialogComponent,
    CancelExamDialogData,
} from './cancel-exam-dialog/cancel-exam-dialog.component';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { BetterUser } from 'src/app/shared/services/better-user/better-user';
import {
    RejectExamDialogComponent,
    RejectExamDialogData,
} from './reject-exam-dialog/reject-exam-dialog.component';

@Component({
    selector: 'app-all-lab-exams',
    templateUrl: './all-lab-exams.component.html',
    styleUrls: ['./all-lab-exams.component.scss'],
})
export class AllLabExamsComponent implements OnInit {
    private _labExaminations: LaboratoryExamination[] = [];
    columns: ColumnInfoItem[] = [];
    options: string[] = [];
    selectedExam: LaboratoryExamination;
    isSelected: boolean = false;
    currentUser: BetterUser;
    examFilters: ((exam: LaboratoryExamination) => boolean)[] = [];
    filterName: string = '';
    filterSurname: string = '';

    constructor(
        private _labService: LaboratoryExaminationsService,
        private _dialog: MatDialog,
        private _loginService: LoginService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.updateExaminations();
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
        this.examFilters.push(
            (labExamination: LaboratoryExamination) =>
                labExamination.visit.patient.name.toLowerCase().includes(this.filterName) &&
                labExamination.visit.patient.surname.toLowerCase().includes(this.filterSurname)
        );
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

            case 'reject':
                this.rejectExam(selectedOption.row);
                break;

            case 'approve':
                this.approveExam(selectedOption.row);
                break;

            default:
                break;
        }
    }

    private approveExam(labExamination: LaboratoryExamination): void {
        this._labService
            .approveUsingPATCH({
                id: labExamination.id,
                supervisorId: this.currentUser.id,
            })
            .subscribe(
                () => {
                    this._snackBar.open('Success!', null, {
                        duration: 1500,
                    });
                    this.updateExaminations();
                },
                () => {
                    this._snackBar.open('Something went wrong..', 'Ok', {
                        duration: 3000,
                    });
                }
            );
    }

    private rejectExam(labExamination: LaboratoryExamination): void {
        this._dialog
            .open(RejectExamDialogComponent, {
                data: new RejectExamDialogData(labExamination.id, this.currentUser.id),
            })
            .afterClosed()
            .subscribe((rejected: boolean) => {
                if (rejected) {
                    this.updateExaminations();
                }
            });
    }

    private cancelExam(labExamination: LaboratoryExamination): void {
        this._dialog
            .open(CancelExamDialogComponent, {
                data: new CancelExamDialogData(labExamination.id, this.currentUser.id),
            })
            .afterClosed()
            .subscribe((canceled: boolean) => {
                if (canceled) {
                    this.updateExaminations();
                }
            });
    }

    private selectExam(labExamination: LaboratoryExamination): void {
        this.selectedExam = labExamination;
        this.isSelected = true;
    }

    private deselectExam(): void {
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
