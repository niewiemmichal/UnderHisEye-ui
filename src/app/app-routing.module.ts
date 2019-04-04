import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitsByDoctorComponent } from './routing-components/visits-by-doctor/visits-by-doctor.component';

const routes: Routes = [
  {path: 'visits-by-doctor', component: VisitsByDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
