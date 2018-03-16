import { Component, OnInit } from '@angular/core';

import { ForumsApiService } from '../../services/Apis/forums-api.service';

import { Router } from '@angular/router'

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  providers: [ForumsApiService]
})
export class ForumComponent implements OnInit {

  forumsList: any;
  
  constructor(
    private newPosts: ForumsApiService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  getList() {
    this.newPosts.getPosts()
      .subscribe(res => {
        this.forumsList = res;
      });
  }
}
