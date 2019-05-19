import { Injectable } from '@angular/core';
import {
    UsersService,
    AssistantsService,
    DoctorsService,
    RegistrantsService,
    SupervisorsService,
} from 'src/app/api/services';
import { map } from 'rxjs/operators';
import { User } from 'src/app/api/models';
import { Observable, merge } from 'rxjs';
import { BetterUser } from './better-user';

export interface IncomingUser {
    id: number;
    name: string;
    surname: string;
    gmcNumber: string;
    user: User;
}

@Injectable({
    providedIn: 'root',
})
export class BetterUserService {
    constructor(
        private usersService: UsersService,
        private assistantsService: AssistantsService,
        private doctorsService: DoctorsService,
        private registrantsService: RegistrantsService,
        private supervisorsService: SupervisorsService
    ) {}

    getAllUsers(): Observable<BetterUser[]> {
        return merge(
            this.assistantsService.getAllLaboratoryAssistantsUsingGET(),
            this.doctorsService.getAllDoctorsUsingGET(),
            this.registrantsService.getAllPatientRegistrationSpecialistsUsingGET(),
            this.supervisorsService.getAllLaboratorySupervisorsUsingGET()
        ).pipe(
            map((incomingUsers: IncomingUser[]) => {
                return this.mapIncomingUsersToBetterUsers(incomingUsers);
            })
        );
    }

    private mapIncomingUsersToBetterUsers(incomingUsers: IncomingUser[]): BetterUser[] {
        let users: BetterUser[] = [];
        incomingUsers.forEach((user: IncomingUser) => {
            users.push(new BetterUser(user));
        });

        return users;
    }
}
