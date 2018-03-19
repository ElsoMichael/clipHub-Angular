import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "../../services/Auth/auth.service";

import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.css']
})
export class ForumDetailsComponent implements OnInit {

  post = <any>{}

  public updatedPost: Object = {}

  public postTitle: String;

  public postText: String;

  baseUrl = environment.apiBase;

  postData = {
    postTitle: '',
    postText: ''
  }

  

  constructor() { }

  ngOnInit() {
    .checklogin()
      // If success, we are logged in.
      .then()
      // Even if you don't do anything on error, catch to avoid a console error.
      .catch(err => {
        console.log(err);
        this.router.navigate(["/"]);
      });
    this.route.params.subscribe(params => {
      this.getPhoneDetails(params["id"]);
    });
  }
      // getting one phone and its details
      getPhoneDetails(id) {
        this.myPhoneService.getId(id).then(thePhoneDetails => {
          this.phone = thePhoneDetails;
        });
      }

      //   doTheUpdate(id, formData) {
//     // console.log("=============== id: ", id);
//     const formInfo = formData.form.controls;
//     console.log("=============== formData: ", formInfo.phoneName);
//     this.phoneBrand = formInfo.phoneBrand.value;
//     this.phoneName = formInfo.phoneName.value;
//     this.phoneColor = formInfo.phoneColor.value;
//     this.sendUpdatesToApi(id);
//   }

//   sendUpdatesToApi(id){
//     this.updatedPhone = { phoneBrand: this.phone.brand, phoneName: this.phone.name, phoneColor: this.phone.color };
//     console.log("updates:", this.updatedPhone)
//     this.myPhoneService.updatePhone(id, this.updatedPhone)
//       .toPromise()
//       .then(()=>{
//         this.myRouter.navigate(['/phones'])
//       })
//       .catch()
//   }

//   deleteThisPhone(){
//     if (!confirm("Are you sure?")) {
//       return;
//     }
//     this.myPhoneService
//       .deletePhone(this.phone._id)
//       .then(() => {
//         console.log("Success");
//         this.myRouter.navigate(["/phones"]);
//       })
//       .catch(err => {
//         alert("Sorry! Something went wrong.");
//         console.log("Phone Delete Error");
//         console.log(err);
//       });
//   }

}

//   constructor(
//     private myPhoneService: PhoneService,
//     private myAuthService: AuthService,
//     private myRoute: ActivatedRoute,
//     private myRouter: Router
//   ) {}