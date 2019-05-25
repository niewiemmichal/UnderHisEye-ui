import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { PatientService } from 'src/app/api/services';
import { Patient } from 'src/app/api/models';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-new-patient',
    templateUrl: './new-patient.component.html',
    styleUrls: ['./new-patient.component.scss'],
})
export class NewPatientComponent implements OnInit {
    @Output() added: EventEmitter<Patient> = new EventEmitter<Patient>();
    @Output() canceled: EventEmitter<boolean> = new EventEmitter<boolean>();

    newPatientForm: FormGroup;

    constructor(
        private patientService: PatientService,
        private snackBar: MatSnackBar,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.newPatientForm = this.fb.group({
            name: [null, Validators.required],
            surname: [null, Validators.required],
            personalIdentityNumber: [
                null,
                [Validators.required, Validators.min(10000000000), Validators.max(99999999999)],
            ],
            address: this.fb.group({
                apartment: [null, Validators.required],
                city: [null, Validators.required],
                houseNumber: [null, Validators.required],
                street: [null, Validators.required],
            }),
        });
    }

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

    hasError(form: string, error?: string): boolean {
        const control: AbstractControl = this.newPatientForm.get(form);
        return error ? control.hasError(error) : !control.valid;
    }
}
