import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneFieldComponent } from './done-field.component';

describe('DoneFieldComponent', () => {
  let component: DoneFieldComponent;
  let fixture: ComponentFixture<DoneFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
