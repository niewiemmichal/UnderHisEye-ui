import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Patient } from 'src/app/api/models';

export class VisitFinalizerDialogData {
    patientId: number;
    registrantId: number;

    constructor(patientId: number, registrantId: number) {
        this.patientId = patientId;
        this.registrantId = registrantId;
    }
}

@Component({
    selector: 'visit-finalizer-dialog',
    templateUrl: 'visit-finalizer-dialog.html',
})
export class VisitFinalizerDialog {
    constructor(
        private dialogRef: MatDialogRef<Component>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    canceled(): void {
        this.dialogRef.close();
    }

    added(addedPatient: Patient): void {
        this.dialogRef.close(addedPatient);
    }
}
