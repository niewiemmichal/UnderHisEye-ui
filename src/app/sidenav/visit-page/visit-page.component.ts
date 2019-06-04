import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { VisitWithExaminationsDto, Examination } from 'src/app/api/models';
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
    @Input()
    visit: VisitWithExaminationsDto;
    @Output()
    ended: EventEmitter<boolean> = new EventEmitter<boolean>();

    visitForm: FormGroup;
    examinations: Examination[];

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
