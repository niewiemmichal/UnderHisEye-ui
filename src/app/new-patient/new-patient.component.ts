import { Component, Output, EventEmitter } from '@angular/core';

export interface NewPatient {
  name: string;
  surname: string;
  pesel: number;
}

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent {
  @Output() added: EventEmitter<NewPatient> = new EventEmitter<NewPatient>();
  @Output() canceled: EventEmitter<boolean> = new EventEmitter<boolean>();

  loginButtonClick(name: string, surname: string, pesel: number): void {
    this.added.emit({ name, surname, pesel });
  }

  cancel(): void {
    this.canceled.emit(true);
  }
}
