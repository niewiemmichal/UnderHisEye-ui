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

const routes: Routes = [
    {
        path: '',
        component: SidenavComponent,
        canActivate: [AppGuard],
        children: [
            { path: 'users', component: AllUsersComponent, canActivate: [AdminGuard] },
            { path: 'visits-by-doctor', component: VisitsByDoctorComponent },
            { path: 'new-visit', component: NewVisitComponent },
            { path: 'doctors-visits', component: DoctorsVisitsComponent },
            { path: 'current-visit', component: VisitPageComponent },
            { path: 'all-users', component: AllUsersComponent },
        ],
    },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
