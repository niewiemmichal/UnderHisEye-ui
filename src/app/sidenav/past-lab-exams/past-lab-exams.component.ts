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
    filterStatusOptions: string[] = ['ALL', 'FINISHED', 'APPROVED', 'CANCELED', 'REJECTED'];
    filterStatus: 'ALL' | 'FINISHED' | 'APPROVED' | 'CANCELED' | 'REJECTED' = 'ALL';
    filterName: string = '';
    filterSurname: string = '';

    constructor(private _labService: LaboratoryExaminationsService, private _dialog: MatDialog) {}

    ngOnInit() {
        this._labService
            .getAllLaboratoryExaminationsUsingGET()
            .subscribe((labExaminations: LaboratoryExamination[]) => {
                this._labExaminations = labExaminations.filter(
                    (labExaminations: LaboratoryExamination) => labExaminations.status !== 'ORDERED'
                );
            });
    }

    get labExaminations(): LaboratoryExamination[] {
        return this._labExaminations.filter(
            (labExamination: LaboratoryExamination) =>
                (this.filterStatus === 'ALL' || labExamination.status === this.filterStatus) &&
                labExamination.visit.patient.name
                    .toLowerCase()
                    .includes(this.filterName.toLowerCase()) &&
                labExamination.visit.patient.surname
                    .toLowerCase()
                    .includes(this.filterSurname.toLowerCase())
        );
    }

    selectedRow(selectedExam: LaboratoryExamination): void {
        if (selectedExam != null) {
            this._dialog.open(ExamDetailsDialogComponent, { data: selectedExam });
        }
    }
}
