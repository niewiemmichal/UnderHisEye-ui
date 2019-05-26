import { NgModule } from '@angular/core';
import { AllUsersComponent } from './all-users/all-users.component';
import { DoctorsVisitsComponent } from './doctors-visits/doctors-visits.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { NewUserComponent } from './all-users/new-user/new-user.component';
import { NewUserDialog } from './all-users/new-user/new-user-dialog';
import { NewVisitComponent } from './new-visit/new-visit.component';
import { NewPatientDialog } from './new-visit/new-patient-dialog/new-patient-dialog';
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
import { VisitFinalizerComponent } from './visit-finalizer/visit-finalizer.component';
import { VisitFinalizerDialog } from './new-visit/visit-finalizer-dialog/visit-finalizer-dialog';

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
        ExaminationAccordionComponent,
        PatientHistoryComponent,
        VisitPageComponent,
        VisitsByDoctorComponent,
        NewUserDialog,
        NewPatientDialog,
        SidenavComponent,
        VisitFinalizerComponent,
        VisitFinalizerDialog,
    ],
    entryComponents: [NewUserDialog, NewPatientDialog, VisitFinalizerDialog],
})
export class SidenavModule {}
