/* tslint:disable */
import { Examination } from './examination';
import { LaboratoryAssistant } from './laboratory-assistant';
import { LaboratorySupervisor } from './laboratory-supervisor';
import { Visit } from './visit';
export interface LaboratoryExamination {
  orderDate?: string;
  approvalDate?: string;
  completionDate?: string;
  examination?: Examination;
  id?: number;
  note?: string;
  assistant?: LaboratoryAssistant;
  result?: string;
  status?: 'ORDERED' | 'FINISHED' | 'APPROVED' | 'CANCELED' | 'REJECTED';
  supervisor?: LaboratorySupervisor;
  supervisorNote?: string;
  visit?: Visit;
}
