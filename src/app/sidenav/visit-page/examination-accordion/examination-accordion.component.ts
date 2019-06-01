import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface AccordionItem {
    SelectedValue: string;
    Note: string;
}

const ExaminationAccordionProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ExaminationAccordionComponent),
    multi: true,
};

@Component({
    selector: 'app-examination-accordion',
    templateUrl: './examination-accordion.component.html',
    styleUrls: ['./examination-accordion.component.scss'],
    providers: [ExaminationAccordionProvider],
})
export class ExaminationAccordionComponent implements OnInit, ControlValueAccessor {
    private _accordionItems: AccordionItem[] = [];
    private _onChange: Function = (_: any) => {};
    private _onTouch: Function = () => {};
    private _disabled: boolean = false;

    @Input()
    placeholderText: string = '';
    @Input()
    options: string[] = [];

    constructor() {}

    get accordionItems(): AccordionItem[] {
        return this._accordionItems;
    }

    ngOnInit(): void {}

    writeValue(obj: AccordionItem[]): void {
        if (obj == null) {
            this._accordionItems.push({ SelectedValue: '', Note: '' });
            console.log(this._accordionItems);
            this.registerOnChange(this._accordionItems);
        } else {
            this._accordionItems = this._accordionItems;
        }
    }

    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouch = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this._disabled = isDisabled;
    }

    addAccordionItem(): void {
        this._accordionItems.push({ SelectedValue: '', Note: '' });
    }

    accordionItemsChanged(value): void {}
}
