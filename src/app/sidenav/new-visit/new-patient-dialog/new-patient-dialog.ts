import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Patient } from 'src/app/api/models';

@Component({
    selector: 'new-patient-dialog',
    templateUrl: 'new-patient-dialog.html',
})
export class NewPatientDialog {
    constructor(private dialogRef: MatDialogRef<Component>) {}

    canceled(): void {
        this.dialogRef.close();
    }

    added(addedPatient: Patient): void {
        this.dialogRef.close(addedPatient);
    }
}
