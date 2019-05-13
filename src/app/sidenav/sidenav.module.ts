import { NgModule } from '@angular/core';
import { AllUsersComponent } from './all-users/all-users.component';
import { DoctorsVisitsComponent } from './doctors-visits/doctors-visits.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { NewUserComponent } from './all-users/new-user/new-user.component';
import { NewUserDialog } from './all-users/new-user/new-user-dialog';
import { NewVisitComponent } from './new-visit/new-visit.component';
import { NewPatientDialog } from './new-visit/new-patient-dialog/new-patient-dialog';
import { TermSelectionComponent } from './term-selection/term-selection.component';
import { ExaminationAccordionComponent } from './visit-page/examination-accordion/examination-accordion.component';
import { PatientHistoryComponent } from './visit-page/patient-history/patient-history.component';
import { VisitPageComponent } from './visit-page/visit-page.component';
import { VisitsByDoctorComponent } from './visits-by-doctor/visits-by-doctor.component';
import { SidenavComponent } from './sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
    imports: [
        SharedModule,
        MaterialModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
    ],
    declarations: [
        AllUsersComponent,
        NewUserComponent,
        DoctorsVisitsComponent,
        NewPatientComponent,
        NewVisitComponent,
        TermSelectionComponent,
        ExaminationAccordionComponent,
        PatientHistoryComponent,
        VisitPageComponent,
        VisitsByDoctorComponent,
        NewUserDialog,
        NewPatientDialog,
        SidenavComponent,
        AdminComponent,
    ],
    entryComponents: [NewUserDialog, NewPatientDialog],
})
export class SidenavModule {}
