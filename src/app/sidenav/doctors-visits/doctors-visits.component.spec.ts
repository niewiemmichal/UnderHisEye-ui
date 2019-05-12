import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsVisitsComponent } from './doctors-visits.component';

describe('DoctorsVisitsComponent', () => {
    let component: DoctorsVisitsComponent;
    let fixture: ComponentFixture<DoctorsVisitsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DoctorsVisitsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DoctorsVisitsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
