import { Component, OnInit } from '@angular/core';
import { LaboratoryExamination } from 'src/app/api/models';
import { LaboratoryExaminationsService } from 'src/app/api/services';
import { ColumnInfoItem } from 'src/app/shared/components/table/table.component';
import { MatDialog } from '@angular/material';
import { ExamDetailsDialogComponent } from './exam-details-dialog/exam-details-dialog.component';

@Component({
    selector: 'app-past-lab-exams',
    templateUrl: './past-lab-exams.component.html',
    styleUrls: ['./past-lab-exams.component.scss'],
})
export class PastLabExamsComponent implements OnInit {
    private _labExaminations: LaboratoryExamination[] = [];
    private _examFilters: ((exam: LaboratoryExamination) => boolean)[] = [];

    columns: ColumnInfoItem[] = [
        {
            columnDef: 'patient',
            header: 'Patient',
            cell: (exam: LaboratoryExamination) =>
                `${exam.visit.patient.name} ${exam.visit.patient.surname}`,
        },
        {
            columnDef: 'exam',
            header: 'Exam',
            cell: (exam: LaboratoryExamination) =>
                `${exam.examination.code} ${exam.examination.name}`,
        },
        {
            columnDef: 'status',
            header: 'Status',
            cell: (exam: LaboratoryExamination) => exam.status.toLowerCase(),
        },
        {
            columnDef: 'orderDate',
            header: 'Order Date',
            cell: (exam: LaboratoryExamination) => exam.orderDate,
        },
        {
            columnDef: 'completeDate',
            header: 'Completion Date',
            cell: (exam: LaboratoryExamination) => exam.completionDate,
        },
        {
            columnDef: 'approveDate',
            header: 'Approval Date',
            cell: (exam: LaboratoryExamination) => exam.approvalDate,
        },
    ];

    constructor(private _labService: LaboratoryExaminationsService, private _dialog: MatDialog) {}

    ngOnInit() {
        this._labService
            .getAllLaboratoryExaminationsUsingGET()
            .subscribe((labExaminations: LaboratoryExamination[]) => {
                this._labExaminations = labExaminations;
            });
    }

    get labExaminations(): LaboratoryExamination[] {
        return this._labExaminations.filter((labExamination: LaboratoryExamination) => {
            return this._examFilters
                .map((examFitler: (exam: LaboratoryExamination) => boolean) => {
                    return examFitler(labExamination);
                })
                .every((value: boolean) => value === true);
        });
    }

    selectedRow(selectedExam: LaboratoryExamination): void {
        this._dialog.open(ExamDetailsDialogComponent, { data: selectedExam });
    }
}