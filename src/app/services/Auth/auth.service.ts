import { Injectable } from '@angular/core';

// Import HttpModule
import { Http } from "@angular/http";

// Import To Promise
import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }

  signup(componentInfo) {
    return (this.http.post(`${this.BASE_URL}/signup`, {
      // Form body information to send to the back end (req.body)
        signUpUsername: componentInfo.username,
        signUpPassword: componentInfo.password
      })
        .toPromise()
        .then(res => res.json())
    );
  }

  login(componentInfo) {
    return (this.http.post(`${this.BASE_URL}/api/login`, {
      // Form body information to send to the back end (req.body)
        loginUsername: componentInfo.username,
        loginPassword: componentInfo.password
      }, {
        // Send the cookies across domains
        withCredentials: true 
      })
        .toPromise()
        .then(res => res.json())
    );
  }

  logout() {
    return (this.http.post(`${this.BASE_URL}/api/logout`, {
      // Nothing to send to the back end (req.body)
      }, {
          // Send the cookies across domains
          withCredentials: true
      })
        .toPromise()
        .then(res => res.json())
    );
  }

  checklogin() {
    return (this.http.get(`${this.BASE_URL}/api/checklogin`, {
        // Send the cookies across domains
        withCredentials: true
      })
        .toPromise()
        .then(res => res.json())
    );
  }
}
