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
import { NewUserDto } from 'src/app/api/models';

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

    addUser(user: NewUser): Observable<BetterUser> {
        let response: any;
        switch (user.role) {
            case 'ADMINISTRATOR':
                response = this.usersService.addAdministratorUsingPOST(this.createNewUserDto(user));
                break;
            case 'ASSISTANT':
                response = this.assistantsService.addLaboratoryAssistantUsingPOST(
                    this.createNewUserDto(user)
                );
                break;
            case 'DOCTOR':
                response = this.doctorsService.addDoctorUsingPOST(this.createNewUserDto(user));
                break;
            case 'REGISTRANT':
                response = this.registrantsService.addPatientRegistrationSpecialistUsingPOST(
                    this.createNewUserDto(user)
                );
                break;
            case 'SUPERVISOR':
                response = this.supervisorsService.addLaboratorySupervisorUsingPOST(
                    this.createNewUserDto(user)
                );
                break;
        }

        return response.pipe(
            map((incomingUsers: IncomingUser[]) => {
                return this.mapIncomingUsersToBetterUsers(incomingUsers);
            })
        );
    }

    createNewUserDto(user: NewUser): NewUserDto {
        return {
            firstName: user.firstName,
            gmcNumber: user.gmcNumber,
            lastName: user.lastName,
            password: user.password,
            username: user.username,
        };
    }

    private mapIncomingUsersToBetterUsers(incomingUsers: IncomingUser[]): BetterUser[] {
        let users: BetterUser[] = [];
        incomingUsers.forEach((user: IncomingUser) => {
            users.push(new BetterUser(user));
        });

        return users;
    }
}
