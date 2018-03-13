import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipTodayComponent } from './clip-today.component';

describe('ClipTodayComponent', () => {
  let component: ClipTodayComponent;
  let fixture: ComponentFixture<ClipTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
