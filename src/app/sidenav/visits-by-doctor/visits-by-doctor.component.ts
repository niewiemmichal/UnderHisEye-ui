import { Component, OnInit } from '@angular/core';
import { ColumnInfoItem, SelectedOption } from 'src/app/shared/components/table/table.component';
import { DoctorsService, VisitsService } from 'src/app/api/services';
import { Doctor, Visit, Patient } from 'src/app/api/models';

@Component({
    selector: 'app-visits-by-doctor',
    templateUrl: './visits-by-doctor.component.html',
    styleUrls: ['./visits-by-doctor.component.scss'],
})
export class VisitsByDoctorComponent implements OnInit {
    doctors: Doctor[] = [];
    visits: Visit[] = [];
    selectedDoctor: Doctor;

    columns: ColumnInfoItem[] = [
        { columnDef: 'patient', header: 'Patient', cell: (visit: Visit) => `${visit.patient.name} ${visit.patient.surname}` },
        { columnDef: 'doctor', header: 'Doctor', cell: (visit: Visit) => `${visit.doctor.name} ${visit.doctor.surname}` },
        { columnDef: 'date', header: 'Date', cell: (visit: Visit) => `${visit.date}` },
    ];

    options: string[] = ['Accept', 'Cancel'];

    constructor(private doctorsService: DoctorsService, private visitsService: VisitsService) {}

    ngOnInit(): void {
        this.doctorsService
            .getAllDoctorsUsingGET()
            .subscribe((doctors: Doctor[]) => {
                this.doctors = doctors;
                console.log(this.doctors);
            });
        this.selectedDoctor = this.doctors[0];
        this.visitsService.getAllUsingGET().subscribe((visits: Visit[]) => {
            this.visits = visits;
            console.log(this.visits);
        });
    }

    selectionChanged(): void {
        //this.patientsToDisplay = this.selectedDoctor.patients;
    }

    optionSelected(selectedOption: SelectedOption): void {
        console.log(selectedOption);
    }
}
