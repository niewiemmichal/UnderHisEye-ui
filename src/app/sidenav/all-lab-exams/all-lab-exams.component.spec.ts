import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLabExamsComponent } from './all-lab-exams.component';

describe('AllLabExamsComponent', () => {
    let component: AllLabExamsComponent;
    let fixture: ComponentFixture<AllLabExamsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AllLabExamsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AllLabExamsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
