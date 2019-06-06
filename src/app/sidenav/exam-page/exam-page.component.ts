import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LaboratoryExamination } from 'src/app/api/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LaboratoryExaminationsService } from 'src/app/api/services';
import { MatSnackBar } from '@angular/material';

interface ExamFormValue {
    result: string;
}

@Component({
    selector: 'app-exam-page',
    templateUrl: './exam-page.component.html',
    styleUrls: ['./exam-page.component.scss'],
})
export class ExamPageComponent implements OnInit {
    @Input()
    exam: LaboratoryExamination;
    @Input()
    assistantId: number;
    @Output()
    finished: EventEmitter<boolean> = new EventEmitter<boolean>();

    examForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _labExamService: LaboratoryExaminationsService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.examForm = this._formBuilder.group({
            result: [null, Validators.required],
        });
    }

    onSubmit(formValue: ExamFormValue): void {
        this._labExamService
            .finishUsingPATCH({
                details: { result: formValue.result, assistantId: this.assistantId },
                id: this.exam.id,
            })
            .subscribe(
                () => {
                    this._snackBar.open('Success!', null, {
                        duration: 3000,
                    });
                    this.finished.emit(true);
                },
                () => {
                    this._snackBar.open('Something went wrong..', 'Ok', {
                        duration: 3000,
                    });
                }
            );
    }

    abort(): void {
        this.finished.emit(false);
    }
}
