import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitsByDoctorComponent } from './visits-by-doctor/visits-by-doctor.component';
import { NewVisitComponent } from './new-visit/new-visit.component';
import { DoctorsVisitsComponent } from './doctors-visits/doctors-visits.component';
import { VisitPageComponent } from './visit-page/visit-page.component';
import { AllUsersComponent } from './all-users/all-users.component';

const routes: Routes = [
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
