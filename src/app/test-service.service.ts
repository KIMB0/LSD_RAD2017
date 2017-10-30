import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestServiceService {

  constructor(private http: HttpClient) { }

  getHttp() {
    this.http.get('https://api.github.com/users/dbdness').subscribe(data => {
      console.log(data);
    });
  }

}

