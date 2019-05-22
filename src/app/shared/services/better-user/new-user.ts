import { NewUserDto } from 'src/app/api/models';

export class NewUser implements NewUserDto {
    firstName: string;
    gmcNumber?: string;
    lastName: string;
    password: string;
    username: string;
    role: 'DOCTOR' | 'REGISTRANT' | 'ASSISTANT' | 'SUPERVISOR' | 'ADMINISTRATOR';

    constructor(init?: any) {
        Object.assign(this, init);
    }
}
