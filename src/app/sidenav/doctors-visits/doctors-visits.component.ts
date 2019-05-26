import { Component, OnInit } from '@angular/core';
import { Patient } from '../visits-by-doctor/doctor';
import { FormControl } from '@angular/forms';
import { ColumnInfoItem, SelectedOption } from 'src/app/shared/components/table/table.component';
import { VisitsService } from 'src/app/api/services';
import { Visit } from 'src/app/api/models';

@Component({
    selector: 'app-doctors-visits',
    templateUrl: './doctors-visits.component.html',
    styleUrls: ['./doctors-visits.component.scss'],
})
export class DoctorsVisitsComponent implements OnInit {
    private _visits: Visit[] = [];

    columns: ColumnInfoItem[] = [
        {
            columnDef: 'name',
            header: 'Name',
            cell: (visit: Visit) => visit.patient.name,
        },
        {
            columnDef: 'surname',
            header: 'Surname',
            cell: (visit: Visit) => visit.patient.surname,
        },
        { columnDef: 'date', header: 'Date', cell: (visit: Visit) => `${visit.date}` },
    ];
    dateForm: FormControl = new FormControl(new Date());
    isSelected: boolean = false;
    selectedPatient: Patient = new Patient();

    options: string[] = ['Accept', 'Cancel'];

    constructor(private visitsService: VisitsService) {}

    ngOnInit(): void {
        this.visitsService.getAllUsingGET().subscribe((visits: Visit[]) => (this._visits = visits));
    }

    get visits(): Visit[] {
        return this._visits.filter((visit: Visit) => visit.registrationDate > this.dateForm.value);
    }
}
