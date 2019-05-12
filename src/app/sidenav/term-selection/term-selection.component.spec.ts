import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermSelectionComponent } from './term-selection.component';

describe('NewVisitComponent', () => {
    let component: TermSelectionComponent;
    let fixture: ComponentFixture<TermSelectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TermSelectionComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TermSelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
