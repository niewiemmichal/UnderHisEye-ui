import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamDetailsDialogComponent } from './exam-details-dialog.component';

describe('ExamDetailsDialogComponent', () => {
    let component: ExamDetailsDialogComponent;
    let fixture: ComponentFixture<ExamDetailsDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExamDetailsDialogComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExamDetailsDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
