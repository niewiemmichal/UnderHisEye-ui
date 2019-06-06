import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { LaboratoryExaminationsService } from 'src/app/api/services';

export class RejectExamDialogData {
    examId: number;
    userId: number;

    constructor(examId: number, userId: number) {
        this.examId = examId;
        this.userId = userId;
    }
}

interface RejectionFormValue {
    note: string;
}

@Component({
    selector: 'app-reject-exam-dialog',
    templateUrl: './reject-exam-dialog.component.html',
    styleUrls: ['./reject-exam-dialog.component.scss'],
})
export class RejectExamDialogComponent implements OnInit {
    rejectForm: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: RejectExamDialogData,
        private _dialogRef: MatDialogRef<Component>,
        private _formBuilder: FormBuilder,
        private _labExaminationservice: LaboratoryExaminationsService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.rejectForm = this._formBuilder.group({
            note: [null, Validators.required],
        });
    }

    close(canceled: boolean = false): void {
        this._dialogRef.close(canceled);
    }

    onSubmit(formValue: RejectionFormValue): void {
        this._labExaminationservice
            .rejectUsingPATCH({
                id: this._data.examId,
                details: { id: this._data.userId, note: formValue.note },
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
