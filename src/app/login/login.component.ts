import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private isLoggedIn: boolean;

  constructor() { }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn = false));
    console.log('Stored!');
  }

  getTest() {
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    console.log(this.isLoggedIn);
  }

}
