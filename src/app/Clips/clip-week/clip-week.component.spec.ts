import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipWeekComponent } from './clip-week.component';

describe('ClipWeekComponent', () => {
  let component: ClipWeekComponent;
  let fixture: ComponentFixture<ClipWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
