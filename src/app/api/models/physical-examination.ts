/* tslint:disable */
import { Examination } from './examination';
import { Visit } from './visit';
export interface PhysicalExamination {
  examination?: Examination;
  id?: number;
  result?: string;
  visit?: Visit;
}
