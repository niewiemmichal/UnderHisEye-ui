import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitPageComponent } from './sidenav/visit-page/visit-page.component';
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
import { AssistantGuard } from './guards/assistant.guard';

const routes: Routes = [
    {
        path: '',
        component: SidenavComponent,
        canActivate: [AppGuard],
        canActivateChild: [AppGuard],
        children: [
            { path: 'users', component: AllUsersComponent, canActivate: [AdminGuard] },
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
                path: 'doctors-visits',
                component: DoctorsVisitsComponent,
                canActivate: [DoctorGuard],
            },
            {
                path: 'current-visit',
                component: VisitPageComponent,
                canActivate: [DoctorGuard],
            },
            {
                path: 'lab-exams',
                component: AllLabExamsComponent,
                canActivate: [AssistantGuard],
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
