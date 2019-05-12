import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NewPatient } from '../../new-patient/new-patient.component';

@Component({
    selector: 'new-patient-dialog',
    templateUrl: 'new-patient-dialog.html',
})
export class NewPatientDialog {
    constructor(private dialogRef: MatDialogRef<Component>) {}

    canceled(): void {
        this.dialogRef.close();
    }

    added(addedPatient: NewPatient): void {
        this.dialogRef.close(addedPatient);
    }
}
