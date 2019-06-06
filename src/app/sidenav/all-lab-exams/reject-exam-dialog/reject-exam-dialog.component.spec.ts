import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectExamDialogComponent } from './reject-exam-dialog.component';

describe('RejectExamDialogComponent', () => {
    let component: RejectExamDialogComponent;
    let fixture: ComponentFixture<RejectExamDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RejectExamDialogComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RejectExamDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
