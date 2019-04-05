import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitsByDoctorComponent } from './routing-components/visits-by-doctor/visits-by-doctor.component';
import { TermSelectionComponent } from './routing-components/term-selection/term-selection.component';

const routes: Routes = [
  { path: 'visits-by-doctor',   component: VisitsByDoctorComponent },
  { path: 'term-selection',          component: TermSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
