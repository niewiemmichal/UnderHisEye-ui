import { Component, Input } from '@angular/core';
import { AccordionItem } from './examination-accordion/examination-accordion.component';
import { Visit } from 'src/app/api/models';

@Component({
    selector: 'app-visit-page',
    templateUrl: './visit-page.component.html',
    styleUrls: ['./visit-page.component.scss'],
})
export class VisitPageComponent {
    @Input()
    visit: Visit;

    availableTests: string[] = ['Badanie TSH', 'Roentgen', 'Rezonans magnetyczny'];
    prescribedTests: AccordionItem[] = [{ SelectedValue: '', Note: '' }];
    availableExaminations: string[] = [
        'Badanie temperatury',
        'Badanie ciśnienia',
        'Nasłuchiwanie płuc',
    ];
    examinations: AccordionItem[] = [{ SelectedValue: '', Note: '' }];
}
