import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from './examination-accordion/examination-accordion.component';
import {
    VisitWithExaminationsDto,
    LaboratoryExaminationDto,
    PhysicalExaminationDto,
} from 'src/app/api/models';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

interface VisitForm {
    description: string;
    diagnosis: string;
    test: any;
    examinations: any[];
}

@Component({
    selector: 'app-visit-page',
    templateUrl: './visit-page.component.html',
    styleUrls: ['./visit-page.component.scss'],
})
export class VisitPageComponent implements OnInit {
    @Input()
    visit: VisitWithExaminationsDto;

    visitForm: FormGroup;

    //testControl: FormControl = new FormControl('medium');

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.visitForm = this.fb.group({
            description: [null, Validators.required],
            diagnosis: [null, Validators.required],
            test: ['medium'],
            examinations: [null],
        });
    }

    availableTests: string[] = ['Badanie TSH', 'Roentgen', 'Rezonans magnetyczny'];
    prescribedTests: AccordionItem[] = [{ SelectedValue: '', Note: '' }];
    availableExaminations: string[] = [
        'Badanie temperatury',
        'Badanie ciśnienia',
        'Nasłuchiwanie płuc',
    ];
    examinations: AccordionItem[] = [{ SelectedValue: '', Note: '' }];

    onSubmit(form: VisitForm): void {
        console.log(form);
    }
}
