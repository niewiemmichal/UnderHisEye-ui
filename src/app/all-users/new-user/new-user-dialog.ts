import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'new-user-dialog',
    templateUrl: 'new-user-dialog.html',
})
export class NewUserDialog {
    constructor(private dialogRef: MatDialogRef<Component>) {}

    canceled(): void {
        console.log('canceled');
        this.dialogRef.close();
    }

    added(addedPatient: any): void {
        console.log('added');
        this.dialogRef.close(addedPatient);
    }
}
