import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipAllComponent } from './clip-all.component';

describe('ClipAllComponent', () => {
  let component: ClipAllComponent;
  let fixture: ComponentFixture<ClipAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
