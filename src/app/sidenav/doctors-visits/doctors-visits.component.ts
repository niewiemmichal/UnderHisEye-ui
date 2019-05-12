import { Component, OnInit } from '@angular/core';
import { Doctor, Patient } from '../visits-by-doctor/doctor';
import { FormControl } from '@angular/forms';
import { ColumnInfoItem, SelectedOption } from 'src/app/shared/components/table/table.component';

@Component({
    selector: 'app-doctors-visits',
    templateUrl: './doctors-visits.component.html',
    styleUrls: ['./doctors-visits.component.scss'],
})
export class DoctorsVisitsComponent implements OnInit {
    doctor: Doctor = {
        id: 3,
        name: 'Paweł',
        surname: 'Jur',
        patients: [
            {
                id: '5c9e822a39b7d1131b53e834',
                name: 'Jenny',
                surname: 'Nguyen',
                visit: 'Sun Apr 21 1974 20:47:55 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a647947364cdfda79',
                name: 'Iva',
                surname: 'Torres',
                visit: 'Thu Sep 02 2010 10:03:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822aafd4e7fd1c24646d',
                name: 'Silvia',
                surname: 'Matthews',
                visit: 'Fri Feb 11 2000 14:48:58 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822af8dc7d1b239c2da9',
                name: 'Eleanor',
                surname: 'Hubbard',
                visit: 'Sun Sep 05 2010 18:08:19 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a4913ce4886dee337',
                name: 'Hamilton',
                surname: 'Spence',
                visit: 'Mon Jan 11 1993 20:20:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822ab856e7fcdff90578',
                name: 'Lindsey',
                surname: 'Kent',
                visit: 'Fri Jul 29 1988 03:09:12 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a1e8dfd57b7e294fe',
                name: 'Aida',
                surname: 'Gray',
                visit: 'Sun Dec 06 2009 08:29:33 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a39b7d1131b53e834',
                name: 'Jenny',
                surname: 'Nguyen',
                visit: 'Sun Apr 21 1974 20:47:55 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a647947364cdfda79',
                name: 'Iva',
                surname: 'Torres',
                visit: 'Thu Sep 02 2010 10:03:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822aafd4e7fd1c24646d',
                name: 'Silvia',
                surname: 'Matthews',
                visit: 'Fri Feb 11 2000 14:48:58 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822af8dc7d1b239c2da9',
                name: 'Eleanor',
                surname: 'Hubbard',
                visit: 'Sun Sep 05 2010 18:08:19 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a4913ce4886dee337',
                name: 'Hamilton',
                surname: 'Spence',
                visit: 'Mon Jan 11 1993 20:20:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822ab856e7fcdff90578',
                name: 'Lindsey',
                surname: 'Kent',
                visit: 'Fri Jul 29 1988 03:09:12 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a1e8dfd57b7e294fe',
                name: 'Aida',
                surname: 'Gray',
                visit: 'Sun Dec 06 2009 08:29:33 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a39b7d1131b53e834',
                name: 'Jenny',
                surname: 'Nguyen',
                visit: 'Sun Apr 21 1974 20:47:55 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a647947364cdfda79',
                name: 'Iva',
                surname: 'Torres',
                visit: 'Thu Sep 02 2010 10:03:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822aafd4e7fd1c24646d',
                name: 'Silvia',
                surname: 'Matthews',
                visit: 'Fri Feb 11 2000 14:48:58 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822af8dc7d1b239c2da9',
                name: 'Eleanor',
                surname: 'Hubbard',
                visit: 'Sun Sep 05 2010 18:08:19 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a4913ce4886dee337',
                name: 'Hamilton',
                surname: 'Spence',
                visit: 'Mon Jan 11 1993 20:20:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822ab856e7fcdff90578',
                name: 'Lindsey',
                surname: 'Kent',
                visit: 'Fri Jul 29 1988 03:09:12 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a1e8dfd57b7e294fe',
                name: 'Aida',
                surname: 'Gray',
                visit: 'Sun Dec 06 2009 08:29:33 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a39b7d1131b53e834',
                name: 'Jenny',
                surname: 'Nguyen',
                visit: 'Sun Apr 21 1974 20:47:55 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a647947364cdfda79',
                name: 'Iva',
                surname: 'Torres',
                visit: 'Thu Sep 02 2010 10:03:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822aafd4e7fd1c24646d',
                name: 'Silvia',
                surname: 'Matthews',
                visit: 'Fri Feb 11 2000 14:48:58 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822af8dc7d1b239c2da9',
                name: 'Eleanor',
                surname: 'Hubbard',
                visit: 'Sun Sep 05 2010 18:08:19 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a4913ce4886dee337',
                name: 'Hamilton',
                surname: 'Spence',
                visit: 'Mon Jan 11 1993 20:20:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822ab856e7fcdff90578',
                name: 'Lindsey',
                surname: 'Kent',
                visit: 'Fri Jul 29 1988 03:09:12 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a1e8dfd57b7e294fe',
                name: 'Aida',
                surname: 'Gray',
                visit: 'Sun Dec 06 2009 08:29:33 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a39b7d1131b53e834',
                name: 'Jenny',
                surname: 'Nguyen',
                visit: 'Sun Apr 21 1974 20:47:55 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a647947364cdfda79',
                name: 'Iva',
                surname: 'Torres',
                visit: 'Thu Sep 02 2010 10:03:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822aafd4e7fd1c24646d',
                name: 'Silvia',
                surname: 'Matthews',
                visit: 'Fri Feb 11 2000 14:48:58 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822af8dc7d1b239c2da9',
                name: 'Eleanor',
                surname: 'Hubbard',
                visit: 'Sun Sep 05 2010 18:08:19 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a4913ce4886dee337',
                name: 'Hamilton',
                surname: 'Spence',
                visit: 'Mon Jan 11 1993 20:20:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822ab856e7fcdff90578',
                name: 'Lindsey',
                surname: 'Kent',
                visit: 'Fri Jul 29 1988 03:09:12 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a1e8dfd57b7e294fe',
                name: 'Aida',
                surname: 'Gray',
                visit: 'Sun Dec 06 2009 08:29:33 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a39b7d1131b53e834',
                name: 'Jenny',
                surname: 'Nguyen',
                visit: 'Sun Apr 21 1974 20:47:55 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a647947364cdfda79',
                name: 'Iva',
                surname: 'Torres',
                visit: 'Thu Sep 02 2010 10:03:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822aafd4e7fd1c24646d',
                name: 'Silvia',
                surname: 'Matthews',
                visit: 'Fri Feb 11 2000 14:48:58 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822af8dc7d1b239c2da9',
                name: 'Eleanor',
                surname: 'Hubbard',
                visit: 'Sun Sep 05 2010 18:08:19 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a4913ce4886dee337',
                name: 'Hamilton',
                surname: 'Spence',
                visit: 'Mon Jan 11 1993 20:20:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822ab856e7fcdff90578',
                name: 'Lindsey',
                surname: 'Kent',
                visit: 'Fri Jul 29 1988 03:09:12 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a1e8dfd57b7e294fe',
                name: 'Aida',
                surname: 'Gray',
                visit: 'Sun Dec 06 2009 08:29:33 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a39b7d1131b53e834',
                name: 'Jenny',
                surname: 'Nguyen',
                visit: 'Sun Apr 21 1974 20:47:55 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a647947364cdfda79',
                name: 'Iva',
                surname: 'Torres',
                visit: 'Thu Sep 02 2010 10:03:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822aafd4e7fd1c24646d',
                name: 'Silvia',
                surname: 'Matthews',
                visit: 'Fri Feb 11 2000 14:48:58 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822af8dc7d1b239c2da9',
                name: 'Eleanor',
                surname: 'Hubbard',
                visit: 'Sun Sep 05 2010 18:08:19 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a4913ce4886dee337',
                name: 'Hamilton',
                surname: 'Spence',
                visit: 'Mon Jan 11 1993 20:20:29 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822ab856e7fcdff90578',
                name: 'Lindsey',
                surname: 'Kent',
                visit: 'Fri Jul 29 1988 03:09:12 GMT+0000 (UTC)',
            },
            {
                id: '5c9e822a1e8dfd57b7e294fe',
                name: 'Aida',
                surname: 'Gray',
                visit: 'Sun Dec 06 2009 08:29:33 GMT+0000 (UTC)',
            },
        ],
    };

    columns: ColumnInfoItem[] = [
        { columnDef: 'id', header: 'Id', cell: (element: any) => `${element.id}` },
        { columnDef: 'name', header: 'Name', cell: (element: any) => `${element.name}` },
        { columnDef: 'surname', header: 'Surname', cell: (element: any) => `${element.surname}` },
        { columnDef: 'visit', header: 'Visit', cell: (element: any) => `${element.visit}` },
    ];

    dateForm: FormControl = new FormControl(new Date());
    patientsToDisplay: Patient[] = this.doctor.patients;
    isSelected: boolean = false;
    selectedPatient: Patient = new Patient();

    options: string[] = ['Accept', 'Cancel'];

    ngOnInit(): void {
        this.patientsToDisplay = this.filterPatients(this.doctor.patients, this.dateForm.value);
    }

    optionSelected(selectedOption: SelectedOption): void {
        if (selectedOption.optionName === 'accept') {
            this.selectedPatient = selectedOption.row as Patient;
            this.isSelected = true;
        }
    }

    dateChanged(date: Date): void {
        this.patientsToDisplay = this.filterPatients(this.doctor.patients, date);
    }

    filterPatients(patients: Patient[], date: Date): Patient[] {
        return patients.filter(patient => this.compareDates(new Date(patient.visit), date) >= 0);
    }

    compareDates(date1: Date, date2: Date): number {
        const year1: number = date1.getFullYear();
        const month1: number = date1.getMonth();
        const day1: number = date1.getDate();
        const year2: number = date2.getFullYear();
        const month2: number = date2.getMonth();
        const day2: number = date2.getDate();
        let result: number = 0;

        if (year1 > year2) {
            result = 1;
        } else if (year1 === year2) {
            if (month1 > month2) {
                result = 1;
            } else if (month1 === month2) {
                if (day1 > day2) {
                    result = 1;
                } else if (day1 === day2) {
                    result = 0;
                } else {
                    result = -1;
                }
            } else {
                result = -1;
            }
        } else {
            result = -1;
        }

        return result;
    }
}
