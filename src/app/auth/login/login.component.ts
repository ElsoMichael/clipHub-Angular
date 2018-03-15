import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/Auth/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginInfo = {
    username: '',
    password: ''
  }

  loginErrorMessage: String;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  doLogin() {
    this.auth.login(this.loginInfo)
      .then(resultFromApi => {
        // clear the form
        this.loginInfo = {
          username: "",
          password: ""
        };

        // clear the error message
        this.loginErrorMessage = "";

        // redirect to Home Page
        this.router.navigate([""]);
      })
      .catch(err => {
        const parsedError = err.json();
        this.loginErrorMessage = parsedError.message + "Come On!";
      });
  }
}
