import { Component, OnInit } from '@angular/core';

import { ForumService } from '../../services/Apis/forum.service';

import { Router } from '@angular/router';

import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-forum-new-post',
  templateUrl: './forum-new-post.component.html',
  styleUrls: ['./forum-new-post.component.css'],
  providers: [ForumService]
})
export class ForumNewPostComponent implements OnInit {

  newPost = {
    title: '',
    details: ''
  }

  constructor(
    private forum: ForumService,
    private myRouter: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.checklogin()
      // If success, we are logged in.
      .then()

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch(err => {
        console.log(err);
        this.myRouter.navigate(["/"]);
      });
  }

  saveNewPost() {
    this.forum.createPost(this.newPost)
      // .createNewPhone(this.phoneData)
      .then(post => {
        console.log("post is", post)
        this.newPost = {
          title: '',
          details: ''
        };
        this.myRouter.navigate([""]);
      })
  }

}
