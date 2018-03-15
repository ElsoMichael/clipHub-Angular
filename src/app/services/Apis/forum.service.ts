import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ForumService {

  Base_URL: String = 'http://localhost:3000';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(`${this.Base_URL}/forum`)
      .map((res) => res.json());
  }

  getThisPost(id) {
    return this.http.get(`${this.Base_URL}/forum/${id}`)
      .map((res) => res.json());
  }

  editPost(post) {
    return this.http.put(`${this.Base_URL}/forum/${post.id}`, post)
      .map((res) => res.json());
  }

  removePost(id) {
    return this.http.delete(`${this.Base_URL}/forum/${id}`)
      .map((res) => res.json());
  }
}
