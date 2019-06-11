import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IcdService } from 'src/app/api/services';
import { Examination } from 'src/app/api/models';
import { ColumnInfoItem } from 'src/app/shared/components/table/table.component';
import { MatSnackBar } from '@angular/material';

interface IcdFormValue {
    code: string;
    name: string;
}

@Component({
    selector: 'app-new-icd',
    templateUrl: './new-icd.component.html',
    styleUrls: ['./new-icd.component.scss'],
})
export class NewIcdComponent implements OnInit {
    icdForm: FormGroup;
    examinations: Examination[] = [];
    columnsInfo: ColumnInfoItem[] = [
        { columnDef: 'code', header: 'Code', cell: (examination: Examination) => examination.code },
        { columnDef: 'name', header: 'Name', cell: (examination: Examination) => examination.name },
    ];

    constructor(
        private _formBuilder: FormBuilder,
        private _icdService: IcdService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.icdForm = this._formBuilder.group({
            code: [null, Validators.required],
            name: [null, Validators.required],
        });
        this.updateExaminations();
    }

    onSubmit(icdFormValue: IcdFormValue): void {
        this._icdService
            .addExaminationUsingPOST({ code: icdFormValue.code, name: icdFormValue.name })
            .subscribe(
                () => {
                    this._snackBar.open('Success!', null, {
                        duration: 1500,
                    });
                    this.updateExaminations();
                },
                () =>
                    this._snackBar.open('Something went wrong..', null, {
                        duration: 3000,
                    })
            );
    }

    private updateExaminations(): void {
        this._icdService
            .getAllExaminationsUsingGET()
            .subscribe((examinations: Examination[]) => (this.examinations = examinations));
    }
}
