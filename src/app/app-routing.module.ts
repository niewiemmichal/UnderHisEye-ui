import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitsByDoctorComponent } from './visits-by-doctor/visits-by-doctor.component';
import { NewVisitComponent } from './new-visit/new-visit.component';
import { DoctorsVisitsComponent } from './doctors-visits/doctors-visits.component';
import { VisitPageComponent } from './visit-page/visit-page.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'visits-by-doctor', component: VisitsByDoctorComponent },
    { path: 'new-visit', component: NewVisitComponent },
    { path: 'doctors-visits', component: DoctorsVisitsComponent },
    { path: 'current-visit', component: VisitPageComponent },
    { path: 'all-users', component: AllUsersComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
