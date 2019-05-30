import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from './examination-accordion/examination-accordion.component';
import { Visit } from 'src/app/api/models';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

interface VisitForm {
    description: string;
    diagnosis: string;
}

@Component({
    selector: 'app-visit-page',
    templateUrl: './visit-page.component.html',
    styleUrls: ['./visit-page.component.scss'],
})
export class VisitPageComponent implements OnInit {
    @Input()
    visit: Visit;

    visitForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.visitForm = this.fb.group({
            description: [null, Validators.required],
            diagnosis: [null, Validators.required],
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
