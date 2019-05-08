import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface AccordionItem {
    SelectedValue: string;
    Note: string;
}

@Component({
    selector: 'app-examination-accordion',
    templateUrl: './examination-accordion.component.html',
    styleUrls: ['./examination-accordion.component.scss'],
})
export class ExaminationAccordionComponent implements OnInit {
    @Input()
    placeholderText: string = '';
    @Input()
    options: string[] = [];
    @Input()
    accordionItems: AccordionItem[] = [{ SelectedValue: '', Note: '' }];
    @Output()
    accordionItemsChange: EventEmitter<AccordionItem[]> = new EventEmitter();

    ngOnInit(): void {}

    addAccordionItem(): void {
        this.accordionItems.push({ SelectedValue: '', Note: '' });
    }

    accordionItemsChanged(): void {
        console.log('change event');
        this.accordionItemsChange.emit(this.accordionItems);
    }
}
