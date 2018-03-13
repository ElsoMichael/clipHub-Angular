import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipMonthComponent } from './clip-month.component';

describe('ClipMonthComponent', () => {
  let component: ClipMonthComponent;
  let fixture: ComponentFixture<ClipMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
