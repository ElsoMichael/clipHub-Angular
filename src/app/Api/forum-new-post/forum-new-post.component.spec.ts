import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumNewPostComponent } from './forum-new-post.component';

describe('ForumNewPostComponent', () => {
  let component: ForumNewPostComponent;
  let fixture: ComponentFixture<ForumNewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumNewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
