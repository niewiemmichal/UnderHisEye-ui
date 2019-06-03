import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LaboratoryExaminationsService } from 'src/app/api/services';

export class CancelExamDialogData {
    examId: number;
    userId: number;

    constructor(examId: number, userId: number) {
        this.examId = examId;
        this.userId = userId;
    }
}

interface CancelationFormValue {
    reason: string;
}

@Component({
    selector: 'app-cancel-exam-dialog',
    templateUrl: './cancel-exam-dialog.component.html',
    styleUrls: ['./cancel-exam-dialog.component.scss'],
})
export class CancelExamDialogComponent implements OnInit {
    cancelationForm: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: CancelExamDialogData,
        private _dialogRef: MatDialogRef<Component>,
        private _formBuilder: FormBuilder,
        private _labExaminationservice: LaboratoryExaminationsService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.cancelationForm = this._formBuilder.group({
            reason: [null, Validators.required],
        });
        console.log(this._data);
    }

    close(canceled: boolean = false): void {
        this._dialogRef.close(canceled);
    }

    onSubmit(formValue: CancelationFormValue): void {
        this._labExaminationservice
            .cancelUsingPATCH({
                id: this._data.examId,
                details: { assistantId: this._data.userId, result: formValue.reason },
            })
            .subscribe(
                () => {
                    this._snackBar.open('Success!', null, {
                        duration: 1500,
                    });
                    this.close(true);
                },
                () => {
                    this._snackBar.open('Something went wrong..', 'Ok', {
                        duration: 3000,
                    });
                }
            );
    }
}
