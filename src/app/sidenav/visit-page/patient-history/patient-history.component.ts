import { Component, OnInit, Input } from '@angular/core';
import { Visit, LaboratoryExamination } from 'src/app/api/models';

@Component({
    selector: 'app-patient-history',
    templateUrl: './patient-history.component.html',
    styleUrls: ['./patient-history.component.scss'],
})
export class PatientHistoryComponent implements OnInit {
    @Input()
    pastHistory: Visit[];
    @Input()
    pastExams: LaboratoryExamination[];

    constructor() {}

    ngOnInit() {}

    headerTitle(exam: LaboratoryExamination): string {
        switch (exam.status) {
            case 'ORDERED':
                return `Lab not visited, ordered at ${exam.orderDate}`;

            case 'FINISHED':
                return `Not approved, finished at ${exam.completionDate}`;

            case 'REJECTED':
                return `Rejected at ${exam.approvalDate}`;

            case 'APPROVED':
                return `Approved at ${exam.approvalDate}`;

            case 'CANCELED':
                return `Canceled at ${exam.completionDate}`;
        }
    }
}
