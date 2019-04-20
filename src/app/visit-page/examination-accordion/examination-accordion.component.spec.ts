import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationAccordionComponent } from './examination-accordion.component';

describe('ExaminationAccordionComponent', () => {
  let component: ExaminationAccordionComponent;
  let fixture: ComponentFixture<ExaminationAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
