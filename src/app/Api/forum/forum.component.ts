import { Component, OnInit } from '@angular/core';

import { ForumService } from '../../services/Apis/forum.service';

import { Router } from '@angular/router'

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  providers: [ForumService]
})
export class ForumComponent implements OnInit {

  forumsList: any;
  
  constructor(
    private newPosts: ForumService,
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
