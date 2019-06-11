import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { VisitWithExaminationsDto } from 'src/app/api/models';

@Component({
    selector: 'app-visit-details-dialog',
    templateUrl: './visit-details-dialog.component.html',
    styleUrls: ['./visit-details-dialog.component.scss'],
})
export class VisitDetailsDialogComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: VisitWithExaminationsDto) {}

    ngOnInit() {}
}
