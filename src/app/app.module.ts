import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as Mat from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { VisitsByDoctorComponent } from './visits-by-doctor/visits-by-doctor.component';
import { NewVisitComponent } from './new-visit/new-visit.component';
import { NewPatientDialog } from './new-visit/new-patient-dialog/new-patient-dialog';
import { TableComponent } from './shared/components/table/table.component';
import { DoctorsVisitsComponent } from './doctors-visits/doctors-visits.component';
import { TermSelectionComponent } from './term-selection/term-selection.component';
import { VisitPageComponent } from './visit-page/visit-page.component';
import { ExaminationAccordionComponent } from './visit-page/examination-accordion/examination-accordion.component';
import { PatientHistoryComponent } from './visit-page/patient-history/patient-history.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { NewUserComponent } from './all-users/new-user/new-user.component';
import { NewUserDialog } from './all-users/new-user/new-user-dialog';
import { ApiModule } from './api/api.module';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuard } from './guards/login.guard';
import { GuardsModule } from './guards/guards.module';

@NgModule({
    declarations: [
        AppComponent,
        VisitsByDoctorComponent,
        TableComponent,
        LoginComponent,
        TermSelectionComponent,
        NewVisitComponent,
        NewPatientComponent,
        NewPatientDialog,
        DoctorsVisitsComponent,
        VisitPageComponent,
        ExaminationAccordionComponent,
        PatientHistoryComponent,
        AllUsersComponent,
        NewUserComponent,
        NewUserDialog,
    ],
    imports: [
        GuardsModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        ApiModule.forRoot({ rootUrl: 'https://api.underhiseye.live' }),
        Mat.MatToolbarModule,
        Mat.MatButtonModule,
        Mat.MatSidenavModule,
        Mat.MatIconModule,
        Mat.MatListModule,
        Mat.MatTableModule,
        Mat.MatPaginatorModule,
        Mat.MatSortModule,
        Mat.MatSelectModule,
        Mat.MatDividerModule,
        Mat.MatMenuModule,
        Mat.MatCardModule,
        Mat.MatIconModule,
        Mat.MatFormFieldModule,
        Mat.MatInputModule,
        Mat.MatDatepickerModule,
        Mat.MatNativeDateModule,
        Mat.MatRippleModule,
        Mat.MatDialogModule,
        Mat.MatTabsModule,
        Mat.MatExpansionModule,
    ],
    providers: [
        { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
        CookieService,
    ],
    bootstrap: [AppComponent],
    entryComponents: [NewPatientDialog, NewUserDialog],
})
export class AppModule {}
