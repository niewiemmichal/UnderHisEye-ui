import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PatientService } from 'src/app/api/services';
import { Patient } from 'src/app/api/models';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-new-patient',
    templateUrl: './new-patient.component.html',
    styleUrls: ['./new-patient.component.scss'],
})
export class NewPatientComponent {
    @Output() added: EventEmitter<Patient> = new EventEmitter<Patient>();
    @Output() canceled: EventEmitter<boolean> = new EventEmitter<boolean>();

    newPatientForm: FormGroup = new FormGroup({
        name: new FormControl(),
        surname: new FormControl(),
        personalIdentityNumber: new FormControl(),
        address: new FormGroup({
            apartment: new FormControl(),
            city: new FormControl(),
            houseNumber: new FormControl(),
            street: new FormControl(),
        }),
    });

    constructor(private patientService: PatientService, private snackBar: MatSnackBar) {}

    onSubmit(): void {        
        this.patientService.patientUsingPOST(this.newPatientForm.value).subscribe(
            (patient: Patient) => {
                this.snackBar.open('Success!', null, {
                    duration: 1500,
                });
                this.added.emit(patient);
            },
            _ => {
                this.snackBar.open('Something went wrong..', 'Ok', {
                    duration: 3000,
                });
            }
        );
    }

    cancel(): void {
        this.canceled.emit(true);
    }
}
