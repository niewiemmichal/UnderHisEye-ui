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
}
