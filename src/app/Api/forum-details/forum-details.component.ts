import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "../../services/Auth/auth.service";

import { CommentsService } from '../../services/Apis/comments.service';

import { ForumService } from '../../services/Apis/forum.service';

import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.css']
})
export class ForumDetailsComponent implements OnInit {

  post = <any>{ }

  public updatedPost: Object = {}

  public title: String;

  public details: String;

  newComment = {
    text: ''
  }

  constructor(
    private auth: AuthService,
    private myRouter: Router,
    private route: ActivatedRoute,
    private forum: ForumService,
    private comment: CommentsService
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
    this.route.params.subscribe(params => {
      this.getPostDetails(params["id"]);
    });
  }


      // getting one phone and its details
      getPostDetails(id) {
        this.forum.getThisPost(id).then(thePostDetails => {
          this.post = thePostDetails;
        });
      }

      doTheUpdate(id, formData) {
        // console.log("=============== id: ", id);
        const formInfo = formData.form.controls;
        console.log("=============== formData: ", formInfo.title);
        this.title = formInfo.title.value;
        this.details = formInfo.details.value;
        this.sendUpdatesToApi(id);
      }

      sendUpdatesToApi(id){
        this.updatedPost = { title: this.post.title, details: this.post.details };
        console.log("updates:", this.updatedPost)
        this.forum.editPost(id, this.updatedPost)
          .toPromise()
          .then(()=>{
            this.myRouter.navigate(['/forum'])
          })
          .catch()
      }

      deleteThisPost(){
        if (!confirm("Are you sure?")) {
        return;
      }
      this.forum.removePost(this.post._id)
        .then(() => {
          console.log("Success");
          this.myRouter.navigate(["/phones"]);
      })
      // .catch(err => {
      //   alert("Sorry! Something went wrong.");
      //   console.log("Phone Delete Error");
      //   console.log(err);
      // });
  }

  // saveNewComment() {
  //   this.comment.createComment(this.newComment)
  //     // .createNewPhone(this.phoneData)
  //     .then(post => {
  //       console.log("post is", post)
  //       this.newComment = {
  //         text: ''
  //       };
  //       this.myRouter.navigate([""]);
  //     })
  // }

}