import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameClipsComponent } from './game-clips.component';

describe('GameClipsComponent', () => {
  let component: GameClipsComponent;
  let fixture: ComponentFixture<GameClipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameClipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
