import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  title: String = '';
  url: String = '';
  text: String = '';
  private isLoggedIn: boolean;


  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (this.isLoggedIn === true) {
      console.log('You are in');
    } else {
      this.router.navigate(['/app-login']);
    }
  }

  submitItem() {
    console.log(this.title, this.url, this.text);
  }

}
