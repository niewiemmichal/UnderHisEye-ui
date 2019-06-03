import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelExamDialogComponent } from './cancel-exam-dialog.component';

describe('CancelExamDialogComponent', () => {
    let component: CancelExamDialogComponent;
    let fixture: ComponentFixture<CancelExamDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CancelExamDialogComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CancelExamDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
