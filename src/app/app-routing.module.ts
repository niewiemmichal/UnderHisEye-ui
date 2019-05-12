import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitsByDoctorComponent } from './visits-by-doctor/visits-by-doctor.component';
import { NewVisitComponent } from './new-visit/new-visit.component';
import { DoctorsVisitsComponent } from './doctors-visits/doctors-visits.component';
import { VisitPageComponent } from './visit-page/visit-page.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppGuard } from './guards/app.guard';

const routes: Routes = [
    { path: '', component: SidenavComponent, canActivate: [AppGuard] },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'visits-by-doctor', outlet: 'sidenav-content', component: VisitsByDoctorComponent },
    { path: 'new-visit', outlet: 'sidenav-content', component: NewVisitComponent },
    { path: 'doctors-visits', outlet: 'sidenav-content', component: DoctorsVisitsComponent },
    { path: 'current-visit', outlet: 'sidenav-content', component: VisitPageComponent },
    { path: 'all-users', outlet: 'sidenav-content', component: AllUsersComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
