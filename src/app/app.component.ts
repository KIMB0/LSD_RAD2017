import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private isLoggedIn: boolean;

  ngOnInit() {
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  }

  logout() {
    localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn = false));
    location.reload();
  }
}
