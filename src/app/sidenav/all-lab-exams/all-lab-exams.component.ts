import { Component, OnInit } from '@angular/core';
import { LaboratoryExaminationsService } from 'src/app/api/services';
import { LaboratoryExamination } from 'src/app/api/models';
import { ColumnInfoItem, SelectedOption } from 'src/app/shared/components/table/table.component';

@Component({
    selector: 'app-all-lab-exams',
    templateUrl: './all-lab-exams.component.html',
    styleUrls: ['./all-lab-exams.component.scss'],
})
export class AllLabExamsComponent implements OnInit {
    labExaminations: LaboratoryExamination[] = [];
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

    constructor(private _labService: LaboratoryExaminationsService) {}

    ngOnInit() {
        this._labService
            .getAllLaboratoryExaminationsUsingGET()
            .subscribe((labExaminations: LaboratoryExamination[]) => {
                this.labExaminations = labExaminations;
            });
    }

    optionSelected(selectedOption: SelectedOption): void {
        console.log(selectedOption.optionName);
    }
}
