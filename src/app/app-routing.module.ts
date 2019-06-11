import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppGuard } from './guards/app.guard';
import { NewVisitComponent } from './sidenav/new-visit/new-visit.component';
import { VisitsByDoctorComponent } from './sidenav/visits-by-doctor/visits-by-doctor.component';
import { DoctorsVisitsComponent } from './sidenav/doctors-visits/doctors-visits.component';
import { AllUsersComponent } from './sidenav/all-users/all-users.component';
import { AdminGuard } from './guards/admin.guard';
import { DoctorGuard } from './guards/doctor.guard';
import { RegistrantGuard } from './guards/registrant.guard';
import { AllLabExamsComponent } from './sidenav/all-lab-exams/all-lab-exams.component';
import { LabGuard } from './guards/lab.guard';
import { PastLabExamsComponent } from './sidenav/past-lab-exams/past-lab-exams.component';
import { PastDoctorsVisitsComponent } from './sidenav/past-doctors-visits/past-doctors-visits.component';
import { NewIcdComponent } from './sidenav/new-icd/new-icd.component';

const routes: Routes = [
    {
        path: '',
        component: SidenavComponent,
        canActivate: [AppGuard],
        canActivateChild: [AppGuard],
        children: [
            {
                path: 'users',
                component: AllUsersComponent,
                canActivate: [AdminGuard],
            },
            {
                path: 'new-icd',
                component: NewIcdComponent,
                canActivate: [AdminGuard],
            },
            {
                path: 'visits-by-doctor',
                component: VisitsByDoctorComponent,
                canActivate: [RegistrantGuard],
            },
            {
                path: 'new-visit',
                component: NewVisitComponent,
                canActivate: [RegistrantGuard],
            },
            {
                path: 'expected-visits',
                component: DoctorsVisitsComponent,
                canActivate: [DoctorGuard],
            },
            {
                path: 'past-visits',
                component: PastDoctorsVisitsComponent,
                canActivate: [DoctorGuard],
            },
            {
                path: 'lab-exams',
                component: AllLabExamsComponent,
                canActivate: [LabGuard],
            },
            {
                path: 'past-exams',
                component: PastLabExamsComponent,
                canActivate: [LabGuard],
            },
        ],
    },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
