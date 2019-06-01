import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    FormArray,
    FormBuilder,
    FormGroup,
    Validators,
    Validator,
    AbstractControl,
    ValidationErrors,
    NG_VALIDATORS,
} from '@angular/forms';
import { Examination } from 'src/app/api/models';

export class ExaminationFormItem {
    examination: Examination;
    note: string;
}

const ExaminationAccordionProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ExaminationAccordionComponent),
    multi: true,
};

const ExaminationAccordionValidator = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ExaminationAccordionComponent),
    multi: true,
};

@Component({
    selector: 'app-examination-accordion',
    templateUrl: './examination-accordion.component.html',
    styleUrls: ['./examination-accordion.component.scss'],
    providers: [ExaminationAccordionProvider, ExaminationAccordionValidator],
})
export class ExaminationAccordionComponent implements OnInit, ControlValueAccessor, Validator {
    private _onChange: Function = (_: ExaminationFormItem[]) => {};
    private _onTouched: Function = () => {};
    private _onValidatorChange: Function = () => {};

    @Input()
    placeholderText: string = '';
    @Input()
    options: Examination;

    examinationForm: FormGroup;

    constructor(private _fb: FormBuilder) {}

    ngOnInit(): void {
        this.examinationForm = this._fb.group({
            examinations: this._fb.array([]),
        });

        this.examinationForm.valueChanges.subscribe(
            (examinations: { examinations: ExaminationFormItem[] }) => {
                this._onValidatorChange();
                this._onChange(examinations.examinations);
            }
        );
    }

    get examinations(): FormArray {
        return this.examinationForm.get('examinations') as FormArray;
    }

    writeValue(obj: any): void {}

    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    validate(control: AbstractControl): ValidationErrors {
        return this.examinationForm.valid ? null : { valid: false };
    }

    registerOnValidatorChange?(fn: () => void): void {
        this._onValidatorChange = fn;
    }

    addExamination(): void {
        (this.examinationForm.get('examinations') as FormArray).push(
            this._fb.group({
                examination: [null, Validators.required],
                note: ['', Validators.required],
            })
        );
    }

    onTouched(): void {
        this._onTouched();
        this._onValidatorChange();
    }
}
