import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VisitsService } from 'src/app/api/services';

export class CancelVisitDialogData {
    visitId: number;

    constructor(visitId: number) {
        this.visitId = visitId;
    }
}

interface CancelationForm {
    reason: string;
}

@Component({
    selector: 'cancel-visit-dialog',
    templateUrl: './cancel-visit-dialog.html',
    styleUrls: ['./cancel-visit-dialog.scss'],
})
export class CancelVisitDialog implements OnInit {
    cancelationForm: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: CancelVisitDialogData,
        private dialogRef: MatDialogRef<Component>,
        private fb: FormBuilder,
        private visitsService: VisitsService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.cancelationForm = this.fb.group({
            reason: [null, Validators.required],
        });
    }

    close(canceled: boolean = false): void {
        this.dialogRef.close(canceled);
    }

    onSubmit(form: CancelationForm): void {
        this.visitsService
            .cancelVisitUsingPATCH({ id: this.data.visitId, reason: form.reason })
            .subscribe(
                _ => {
                    this.snackBar.open('Success!', null, {
                        duration: 1500,
                    });
                    this.close(true);
                },
                _ => {
                    this.snackBar.open('Something went wrong..', 'Ok', {
                        duration: 3000,
                    });
                }
            );
    }
}
