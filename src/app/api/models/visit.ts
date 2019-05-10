/* tslint:disable */
import { Doctor } from './doctor';
import { Patient } from './patient';
import { Registrant } from './registrant';
export interface Visit {
  date?: string;
  description?: string;
  diagnosis?: string;
  doctor?: Doctor;
  id?: number;
  patient?: Patient;
  registrationDate?: string;
  registrationSpecialist?: Registrant;
  status?: 'REGISTERED' | 'FINISHED' | 'CANCELED';
}
