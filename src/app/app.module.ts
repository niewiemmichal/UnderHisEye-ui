import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import * as Mat from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { VisitsByDoctorComponent } from './routing-components/visits-by-doctor/visits-by-doctor.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { TermSelectionComponent } from './routing-components/term-selection/term-selection.component';
import { NewVisitComponent, DialogDataExampleDialog } from './routing-components/new-visit/new-visit.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    VisitsByDoctorComponent,
    TableComponent,
    LoginComponent,
    TermSelectionComponent,
    NewVisitComponent,
    NewPatientComponent,
    DialogDataExampleDialog
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
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
    Mat.MatDialogModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogDataExampleDialog
  ]
})
export class AppModule { }
