import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// Import Map Operator
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
    .toPromise()
    .then((res: Response) => res.json());
  }

  createPost(sendData) {
    return this.http.post(`${this.Base_URL}/forum`, sendData, { withCredentials: true })
    .toPromise()
    .then((res: Response) => res.json());
  }

  editPost(id, edit) {
    return this.http.put(`${this.Base_URL}/forum/${id}`, edit, { withCredentials: true })
    .map((res: Response) => res.json());
  }

  removePost(id) {
    return this.http.delete(`${this.Base_URL}/forum/${id}`, { withCredentials: true })
    .toPromise()
    .then((res: Response) => res.json());
  }
}
