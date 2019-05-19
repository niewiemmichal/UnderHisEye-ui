import { IncomingUser } from './better-user.service';

export class BetterUser {
    id: number;
    name: string;
    surname: string;
    role?: 'DOCTOR' | 'REGISTRANT' | 'ASSISTANT' | 'SUPERVISOR' | 'ADMINISTRATOR';
    username?: string;
    gmcNumber: string;

    constructor(incomingUser: IncomingUser) {
        this.id = incomingUser.id || null;
        this.name = incomingUser.name || null;
        this.surname = incomingUser.surname || null;
        this.role = incomingUser.user.role || null;
        this.username = incomingUser.user.username || null;
        this.gmcNumber = incomingUser.gmcNumber || null;
    }
}
