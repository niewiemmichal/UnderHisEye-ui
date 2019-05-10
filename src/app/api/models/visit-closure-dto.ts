/* tslint:disable */
import { LaboratoryExaminationDto } from './laboratory-examination-dto';
import { PhysicalExaminationDto } from './physical-examination-dto';
export interface VisitClosureDto {
  description?: string;
  diagnosis?: string;
  laboratoryExaminations?: Array<LaboratoryExaminationDto>;
  physicalExaminations?: Array<PhysicalExaminationDto>;
}
