/* tslint:disable */
import { LaboratoryExamination } from './laboratory-examination';
import { PhysicalExamination } from './physical-examination';
import { Visit } from './visit';
export interface VisitWithExaminationsDto {
  laboratoryExaminations?: Array<LaboratoryExamination>;
  physicalExaminations?: Array<PhysicalExamination>;
  visit?: Visit;
}
