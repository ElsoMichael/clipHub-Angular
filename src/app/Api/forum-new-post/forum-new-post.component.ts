import { Component, OnInit } from '@angular/core';

import { ForumsApiService } from '../../services/Apis/forums-api.service';

import { Router } from '@angular/router'

@Component({
  selector: 'app-forum-new-post',
  templateUrl: './forum-new-post.component.html',
  styleUrls: ['./forum-new-post.component.css'],
  providers: [ForumsApiService]
})
export class ForumNewPostComponent implements OnInit {

  newPost = {
    title: '',
    text: ''
  }

  constructor(
    private newPosts: ForumsApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addNewPosts() {
    this.newPosts.createPost(this.newPosts)
      .subscribe(resultFromForum => {
        console.log(resultFromForum, "submitted");
        // For now
        this.router.navigate([""]);
      })
  }

}
