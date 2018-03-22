import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleClipComponent } from './single-clip.component';

describe('SingleClipComponent', () => {
  let component: SingleClipComponent;
  let fixture: ComponentFixture<SingleClipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleClipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
