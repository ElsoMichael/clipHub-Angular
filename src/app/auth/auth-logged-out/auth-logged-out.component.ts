import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/Auth/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-logged-out',
  templateUrl: './auth-logged-out.component.html',
  styleUrls: ['./auth-logged-out.component.css'],
  providers: [AuthService]
})
export class AuthLoggedOutComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loggedout();
  }
    loggedout() {
      this.auth.logout()
        .then(res => {
          this.router.navigate(["login"]);
        })
    }
}
