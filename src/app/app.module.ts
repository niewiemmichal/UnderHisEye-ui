import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import * as Mat from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { VisitsByDoctorComponent } from './routing-components/visits-by-doctor/visits-by-doctor.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitsByDoctorComponent,
    TableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
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
    Mat.MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
