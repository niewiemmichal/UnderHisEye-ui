import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastDoctorsVisitsComponent } from './past-doctors-visits.component';

describe('PastDoctorsVisitsComponent', () => {
    let component: PastDoctorsVisitsComponent;
    let fixture: ComponentFixture<PastDoctorsVisitsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PastDoctorsVisitsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PastDoctorsVisitsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
