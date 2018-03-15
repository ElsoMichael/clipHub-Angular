import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  signUpInfo = {
    username: '',
    password: ''
  }

  errorMessage: String;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  doSignup() {
    this.auth.signup(this.signUpInfo)
    .then(resultFromApi => {
      // clear form
      this.signUpInfo = { username: "", password: "" };

      // clear error message
      this.errorMessage = "";

      // redirect to /phones
      this.router.navigate([""]);
    })
    .catch(err => {
      const parsedError = err.json();
      this.errorMessage = parsedError.message + "Come On!";
    });
  } // close doSignUp()

}
