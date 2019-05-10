/* tslint:disable */
import { Examination } from './examination';
import { LaboratoryAssistant } from './laboratory-assistant';
import { LaboratorySupervisor } from './laboratory-supervisor';
export interface LaboratoryExamination {
  note?: string;
  approvalDate?: string;
  completionDate?: string;
  examination?: Examination;
  id?: number;
  assistant?: LaboratoryAssistant;
  orderDate?: string;
  result?: string;
  status?: 'ORDERED' | 'FINISHED' | 'APPROVED' | 'CANCELED' | 'REJECTED';
  supervisor?: LaboratorySupervisor;
  supervisorNote?: string;
}
