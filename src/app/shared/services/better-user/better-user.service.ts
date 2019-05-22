import { Injectable } from '@angular/core';
import {
    UsersService,
    AssistantsService,
    DoctorsService,
    RegistrantsService,
    SupervisorsService,
} from 'src/app/api/services';
import { map } from 'rxjs/operators';
import { Observable, merge } from 'rxjs';
import { BetterUser, IncomingUser } from './better-user';
import { NewUser } from './new-user';

@Injectable({
    providedIn: 'root',
})
export class BetterUserService {
    readonly roles: string[] = ['DOCTOR', 'REGISTRANT', 'ASSISTANT', 'SUPERVISOR', 'ADMINISTRATOR'];

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

    addUser(user: NewUser) {
        console.log(user);
    }

    private mapIncomingUsersToBetterUsers(incomingUsers: IncomingUser[]): BetterUser[] {
        let users: BetterUser[] = [];
        incomingUsers.forEach((user: IncomingUser) => {
            users.push(new BetterUser(user));
        });

        return users;
    }
}
