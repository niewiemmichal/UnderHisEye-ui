import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitFinalizerComponent } from './visit-finalizer.component';

describe('VisitFinalizerComponent', () => {
  let component: VisitFinalizerComponent;
  let fixture: ComponentFixture<VisitFinalizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitFinalizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitFinalizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
