/* tslint:disable */
import { Patient } from './patient';
export interface VisitRegistrationDto {
  date?: string;
  doctorId?: number;
  patient?: Patient;
  patientId?: number;
  registrantId?: number;
}
