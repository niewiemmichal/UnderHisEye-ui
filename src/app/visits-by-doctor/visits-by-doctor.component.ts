import { Component, OnInit } from '@angular/core';
import { Doctor, Patient } from './doctor';
import { ColumnInfoItem, SelectedOption } from '../shared/components/table/table.component';

@Component({
    selector: 'app-visits-by-doctor',
    templateUrl: './visits-by-doctor.component.html',
    styleUrls: ['./visits-by-doctor.component.scss'],
})
export class VisitsByDoctorComponent implements OnInit {
    doctors: Doctor[] = [
        {
            id: 1,
            name: 'Aleksander',
            surname: 'Nauka',
            patients: [
                {
                    id: '5c9e81e67b56c38729cb0c48',
                    name: 'Janine',
                    surname: 'House',
                    visit: 'Fri Jul 23 1976 19:42:44 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e81e6923ffb1b9aab56e0',
                    name: 'Frazier',
                    surname: 'Cochran',
                    visit: 'Sun Feb 26 1989 08:58:50 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e81e6a5b0946e037130fc',
                    name: 'Rogers',
                    surname: 'Branch',
                    visit: 'Sat Dec 12 2015 01:36:27 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e81e60c6ade340ab05c0b',
                    name: 'Gates',
                    surname: 'Mitchell',
                    visit: 'Thu Aug 26 1982 07:04:50 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e81e617cfab31379b0b5d',
                    name: 'Booth',
                    surname: 'Powell',
                    visit: 'Thu Nov 18 1982 09:44:04 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e81e6db0d44f94e9d3002',
                    name: 'Alba',
                    surname: 'Willis',
                    visit: 'Fri Feb 04 1977 17:32:32 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e81e64a17c7ff9d5e2dc5',
                    name: 'Sweet',
                    surname: 'Levine',
                    visit: 'Thu Jul 25 2002 06:20:41 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e81e6228fe8073bbc4dc4',
                    name: 'Tanisha',
                    surname: 'Simon',
                    visit: 'Thu May 11 2006 12:34:16 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e81e633efdaaab1ab0a1a',
                    name: 'Gamble',
                    surname: 'Miller',
                    visit: 'Wed Feb 18 1981 05:37:51 GMT+0000 (UTC)',
                },
            ],
        },
        {
            id: 2,
            name: 'Michał',
            surname: 'Padula',
            patients: [
                {
                    id: '5c9e820a927a2e20395df663',
                    name: 'Davidson',
                    surname: 'Lowery',
                    visit: 'Thu Nov 04 1982 02:34:29 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e820a90188c2350d64401',
                    name: 'Burns',
                    surname: 'Schultz',
                    visit: 'Fri Sep 12 1975 08:57:38 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e820a0a755107caf09821',
                    name: 'Beasley',
                    surname: 'Rivers',
                    visit: 'Fri Aug 02 1996 00:27:00 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e820a9a7492d9d62566da',
                    name: 'Kidd',
                    surname: 'Leblanc',
                    visit: 'Fri Jan 23 1976 15:17:13 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e820a915be977806182d6',
                    name: 'Lilly',
                    surname: 'Martin',
                    visit: 'Sat Apr 16 2016 01:31:13 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e820ad66d06f149c9aacf',
                    name: 'Florine',
                    surname: 'Hull',
                    visit: 'Sat Jan 31 2004 11:04:21 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e820a184aa99965252f4a',
                    name: 'Tucker',
                    surname: 'Bean',
                    visit: 'Tue Apr 22 1997 14:57:50 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e820a02044a6ecbf99e12',
                    name: 'Georgina',
                    surname: 'Salinas',
                    visit: 'Sat Jan 12 1991 14:35:19 GMT+0000 (UTC)',
                },
                {
                    id: '5c9e820a7ddb6d7a48820e1c',
                    name: 'Dorsey',
                    surname: 'Cunningham',
                    visit: 'Sun Feb 15 1981 01:14:27 GMT+0000 (UTC)',
                },
            ],
        },
        {
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
        },
    ];

    patientsToDisplay: Patient[] = [];

    columns: ColumnInfoItem[] = [
        { columnDef: 'id', header: 'Id', cell: (element: any) => `${element.id}` },
        { columnDef: 'name', header: 'Name', cell: (element: any) => `${element.name}` },
        { columnDef: 'surname', header: 'Surname', cell: (element: any) => `${element.surname}` },
        { columnDef: 'visit', header: 'Visit', cell: (element: any) => `${element.visit}` },
    ];

    selectedDoctor: Doctor;
    options: string[] = ['Accept', 'Cancel'];

    ngOnInit(): void {
        this.selectedDoctor = this.doctors[0];
        this.patientsToDisplay = this.selectedDoctor.patients;
    }

    selectionChanged(): void {
        this.patientsToDisplay = this.selectedDoctor.patients;
    }

    optionSelected(selectedOption: SelectedOption): void {
        console.log(selectedOption);
    }
}
