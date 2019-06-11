import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIcdComponent } from './new-icd.component';

describe('NewIcdComponent', () => {
  let component: NewIcdComponent;
  let fixture: ComponentFixture<NewIcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
