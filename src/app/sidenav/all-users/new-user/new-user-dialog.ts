import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BetterUser } from 'src/app/shared/services/better-user/better-user';

@Component({
    selector: 'new-user-dialog',
    templateUrl: 'new-user-dialog.html',
})
export class NewUserDialog {
    constructor(private dialogRef: MatDialogRef<Component>) {}

    canceled(): void {
        this.dialogRef.close();
    }

    added(addedPatient: BetterUser): void {
        this.dialogRef.close(addedPatient);
    }
}
