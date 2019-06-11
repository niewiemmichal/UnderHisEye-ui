import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastLabExamsComponent } from './past-lab-exams.component';

describe('PastLabExamsComponent', () => {
    let component: PastLabExamsComponent;
    let fixture: ComponentFixture<PastLabExamsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PastLabExamsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PastLabExamsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
