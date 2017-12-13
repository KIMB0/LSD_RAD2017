import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {

  private baseURL = 'http://94.130.57.246:9000/hackernews/';

  constructor(private http: HttpClient) { }

  login(object: Object) {
    return this.http.post(this.baseURL + 'login/', object);
  }

  signup(object: Object) {
    return this.http.post(this.baseURL + 'user/', object);
  }
}
