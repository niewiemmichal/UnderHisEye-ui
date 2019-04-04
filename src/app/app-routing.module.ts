import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitsByDoctorComponent } from './routing-components/visits-by-doctor/visits-by-doctor.component';
import { NewVisitComponent } from './routing-components/new-visit/new-visit.component';

const routes: Routes = [
  { path: 'visits-by-doctor',   component: VisitsByDoctorComponent },
  { path: 'new-visit',          component: NewVisitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
