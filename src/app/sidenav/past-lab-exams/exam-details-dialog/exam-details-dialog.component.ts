import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { LaboratoryExamination } from 'src/app/api/models';

@Component({
    selector: 'app-exam-details-dialog',
    templateUrl: './exam-details-dialog.component.html',
    styleUrls: ['./exam-details-dialog.component.scss'],
})
export class ExamDetailsDialogComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: LaboratoryExamination) {}

    ngOnInit() {}
}
