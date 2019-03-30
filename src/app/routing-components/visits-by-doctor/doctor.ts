export class Doctor {
    id: number;
    name: string;
    surname: string;
    patients: Patient[];
}

export class Patient {
    id: string;
    name: string;
    surname: string;
    visit: string;
}