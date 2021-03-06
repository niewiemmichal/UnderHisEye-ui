import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Visit, Doctor, VisitRegistrationDto } from 'src/app/api/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DoctorsService, VisitsService } from 'src/app/api/services';
import { VisitFinalizerDialogData } from '../new-visit/visit-finalizer-dialog/visit-finalizer-dialog';
import { MatSnackBar } from '@angular/material';
import * as moment from 'moment';

interface Form {
    doctor: Doctor;
    date: Date;
    hour: number;
    minutes: number;
}

@Component({
    selector: 'app-visit-finalizer',
    templateUrl: './visit-finalizer.component.html',
    styleUrls: ['./visit-finalizer.component.scss'],
})
export class VisitFinalizerComponent implements OnInit {
    @Output() added: EventEmitter<Visit> = new EventEmitter<Visit>();
    @Output() canceled: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() data: VisitFinalizerDialogData;

    doctors: Doctor[] = [];
    newVisitForm: FormGroup;
    hours: number[] = [];
    minutes: number[] = [];

    constructor(
        private doctorsService: DoctorsService,
        private fb: FormBuilder,
        private visitsService: VisitsService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.doctorsService
            .getAllDoctorsUsingGET()
            .subscribe((doctors: Doctor[]) => (this.doctors = doctors));
        this.newVisitForm = this.fb.group({
            doctor: [null, Validators.required],
            date: [new Date(), Validators.required],
            hour: [null, Validators.required],
            minutes: [null, Validators.required],
        });
        this.hours = this.generateNumbers(8, 18);
        this.minutes = this.generateNumbers(0, 60, 10);
    }

    generateNumbers(min: number, max: number, step: number = 1): number[] {
        let result: number[] = [];
        for (let i = min; i <= max; i += step) {
            result.push(i);
        }
        return result;
    }

    onSubmit(): void {
        const newVisit: VisitRegistrationDto = this.createVisitDto(this.newVisitForm.value);
        this.visitsService.registerVisitUsingPOST(newVisit).subscribe(
            (visit: Visit) => {
                this.snackBar.open('Success!', null, {
                    duration: 1500,
                });
                this.added.emit(visit);
            },
            _ => {
                this.snackBar.open('Something went wrong..', 'Ok', {
                    duration: 3000,
                });
            }
        );
    }

    createVisitDto(form: Form): VisitRegistrationDto {
        const date: Date = new Date(
            form.date.getFullYear(),
            form.date.getMonth(),
            form.date.getDate(),
            form.hour,
            form.minutes
        );
        return {
            date: moment(date)
                .toISOString(true)
                .split('+')[0],
            doctorId: form.doctor.id,
            patientId: this.data.patientId,
            registrantId: this.data.registrantId,
        };
    }

    cancel(): void {
        this.canceled.emit(true);
    }
}
