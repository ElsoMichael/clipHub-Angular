import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoggedOutComponent } from './auth-logged-out.component';

describe('AuthLoggedOutComponent', () => {
  let component: AuthLoggedOutComponent;
  let fixture: ComponentFixture<AuthLoggedOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoggedOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
