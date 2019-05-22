import { User } from 'src/app/api/models';

export interface IncomingUser {
    id: number;
    name: string;
    surname: string;
    gmcNumber: string;
    user: User;
}

export class BetterUser {
    id: number;
    name: string;
    surname: string;
    role?: 'DOCTOR' | 'REGISTRANT' | 'ASSISTANT' | 'SUPERVISOR' | 'ADMINISTRATOR';
    username?: string;
    gmcNumber: string;

    constructor(init?: IncomingUser) {
        Object.assign(this, init);
        Object.assign(this, init.user);
    }
}
