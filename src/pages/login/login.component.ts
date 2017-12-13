import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username = '';
  private password = '';
  private createUsername = '';
  private createPassword = '';
  private user = {};
  public isLoggedIn: boolean;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    const object = {
      'about' : null,
      'created': null,
      'delay': null,
      'id': this.username,
      'password' : this.password,
      'karma': null,
      'submitted': null
    };

    this.authService.login(object).subscribe(response => {
      this.user = response;
    }, err => alert('Something went wrong. Try again!'), () => {
      localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn = true)), location.reload(), this.router.navigate(['/news']);
    });
  }

  signup() {
    const object = {
      'about' : '',
      'created': '',
      'delay': '',
      'id': this.createUsername,
      'password' : this.createPassword,
      'karma': 0,
      'submitted': []
    };

    this.authService.signup(object).subscribe(response => {
      this.user = response;
    }, err => alert('Something went wrong. Try again!'), () => {
      alert('Hi ' + this.createUsername + '. You are now registered. Please login'), this.createUsername = '', this.createPassword = '';
    });
  }

  setFalse() {
    localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn = false));
  }
}
