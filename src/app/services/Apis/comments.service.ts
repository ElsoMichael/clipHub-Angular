import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class CommentsService {

  Base_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getComments() {
    return this.http.get(`${this.Base_URL}/comments`)
      .map((res) => res.json());
  }

  getComment(id) {
    return this.http.get(`${this.Base_URL}/comments/${id}`)
      .map((res) => res.json());
  }

  editComment(comment) {
    return this.http.put(`${this.Base_URL}/comments/${comment.id}`, comment)
      .map((res) => res.json());
  }

  removeComment(id) {
    return this.http.delete(`${this.Base_URL}/comments/${id}`)
      .map((res) => res.json());
  }
}