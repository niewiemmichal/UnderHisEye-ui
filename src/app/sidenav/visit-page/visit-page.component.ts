import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
    VisitWithExaminationsDto,
    Examination,
    Visit,
    LaboratoryExamination,
} from 'src/app/api/models';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { IcdService, VisitsService } from 'src/app/api/services';
import { ExaminationFormItem } from './examination-accordion/examination-accordion.component';
import { MatSnackBar } from '@angular/material';

interface VisitForm {
    description: string;
    diagnosis: string;
    physicalExaminations: ExaminationFormItem[];
    laboratoryExaminations: ExaminationFormItem[];
}

@Component({
    selector: 'app-visit-page',
    templateUrl: './visit-page.component.html',
    styleUrls: ['./visit-page.component.scss'],
})
export class VisitPageComponent implements OnInit {
    private _pastVisits: VisitWithExaminationsDto[];

    @Input()
    visit: VisitWithExaminationsDto;
    @Input()
    set pastVisits(visits: VisitWithExaminationsDto[]) {
        this._pastVisits = visits;
    }
    @Output()
    ended: EventEmitter<boolean> = new EventEmitter<boolean>();

    pastHistory: Visit[];
    visitForm: FormGroup;
    examinations: Examination[];
    pastExams: LaboratoryExamination[];

    constructor(
        private fb: FormBuilder,
        private icdService: IcdService,
        private visitsService: VisitsService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.visitForm = this.fb.group({
            description: [null, Validators.required],
            diagnosis: [null, Validators.required],
            physicalExaminations: [[]],
            laboratoryExaminations: [[]],
        });
        this.icdService.getAllExaminationsUsingGET().subscribe((examinations: Examination[]) => {
            this.examinations = examinations;
        });
        this.pastHistory = this._pastVisits
            .map((visit: VisitWithExaminationsDto) => visit.visit)
            .sort((a: Visit, b: Visit) => (a.date < b.date ? 1 : -1));
        this.pastExams = this._pastVisits
            .map((visit: VisitWithExaminationsDto) => visit.laboratoryExaminations)
            .reduce((allExams: LaboratoryExamination[], nextExams: LaboratoryExamination[]) =>
                allExams.concat(nextExams)
            )
            .sort((a: LaboratoryExamination, b: LaboratoryExamination) => {
                if (a.status === 'ORDERED') {
                    return -1;
                }
                if (a.status === 'CANCELED' && b.status !== 'ORDERED') {
                    return -1;
                }
                if (a.status === 'FINISHED' && b.status !== 'ORDERED' && b.status !== 'CANCELED') {
                    return -1;
                }
                if (a.status === 'REJECTED' && b.status === 'APPROVED') {
                    return -1;
                }
                return a.orderDate < b.orderDate ? 1 : -1;
            });
    }

    onSubmit(form: VisitForm): void {
        this.visitsService
            .endVisitUsingPATCH(this.parseToEndVisitParams(form, this.visit.visit.id))
            .subscribe(
                () => {
                    this.snackBar.open('Success!', null, {
                        duration: 3000,
                    });
                    this.ended.emit(true);
                },
                () => {
                    this.snackBar.open('Something went wrong..', 'Ok', {
                        duration: 3000,
                    });
                }
            );
    }

    cancel(): void {
        this.ended.emit(false);
    }

    parseToEndVisitParams(
        form: VisitForm,
        visitId: number
    ): VisitsService.EndVisitUsingPATCHParams {
        return {
            id: visitId,
            details: {
                description: form.description,
                diagnosis: form.diagnosis,
                physicalExaminations: form.physicalExaminations.map(
                    (examination: ExaminationFormItem) => {
                        return {
                            examinationCode: examination.examination.code,
                            result: examination.note,
                            visitId: visitId,
                        };
                    }
                ),
                laboratoryExaminations: form.laboratoryExaminations.map(
                    (examination: ExaminationFormItem) => {
                        return {
                            examinationCode: examination.examination.code,
                            note: examination.note,
                            visitId: visitId,
                        };
                    }
                ),
            },
        };
    }
}
