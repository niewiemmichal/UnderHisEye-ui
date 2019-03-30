import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsByDoctorComponent } from './visits-by-doctor.component';

describe('VisitsByDoctorComponent', () => {
  let component: VisitsByDoctorComponent;
  let fixture: ComponentFixture<VisitsByDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitsByDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitsByDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
