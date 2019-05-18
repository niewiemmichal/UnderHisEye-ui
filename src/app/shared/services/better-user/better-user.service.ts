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
import { Observable } from 'rxjs';

export class BetterUser {
    id: number;
    name: string;
    surname: string;
    role?: 'DOCTOR' | 'REGISTRANT' | 'ASSISTANT' | 'SUPERVISOR' | 'ADMINISTRATOR';
    username?: string;
    gmcNumber: string;
}

interface AdditionalInfo {
    id: number;
    name: string;
    surname: string;
    gmcNumber: string;
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
        return this.usersService.getAllUsersUsingGET().pipe(
            map((users: User[]) => {
                return users as BetterUser[];
            }),
            map((users: BetterUser[]) => {
                users.forEach((user: BetterUser) => {
                    user = this.retriveAddtionalUserInfo(user);
                });
                return users;
            })
        );
    }

    private retriveAddtionalUserInfo(user: BetterUser): BetterUser {
        this.assistantsService
            .getLaboratoryAssistantUsingGET(user.username)
            .subscribe((assistant: AdditionalInfo) => {
                this.mergeIntoBetterUser(user, assistant);
            });
        this.doctorsService
            .getDoctorUsingGET(user.username)
            .subscribe((assistant: AdditionalInfo) => {
                this.mergeIntoBetterUser(user, assistant);
            });
        this.registrantsService
            .getPatientRegistrationSpecialistUsingGET(user.username)
            .subscribe((assistant: AdditionalInfo) => {
                this.mergeIntoBetterUser(user, assistant);
            });
        this.supervisorsService
            .getLaboratorySupervisorUsingGET(user.username)
            .subscribe((assistant: AdditionalInfo) => {
                this.mergeIntoBetterUser(user, assistant);
            });

        return user;
    }

    private mergeIntoBetterUser(betterUser: BetterUser, info: AdditionalInfo) {
        betterUser.id = info.id || null;
        betterUser.gmcNumber = info.gmcNumber || null;
        betterUser.name = info.name || null;
        betterUser.surname = info.surname || null;

        return betterUser;
    }
}
