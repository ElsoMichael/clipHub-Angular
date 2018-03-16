import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelClipsComponent } from './channel-clips.component';

describe('ChannelClipsComponent', () => {
  let component: ChannelClipsComponent;
  let fixture: ComponentFixture<ChannelClipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelClipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
