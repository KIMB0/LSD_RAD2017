import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  title: String = '';
  url: String = '';
  text: String = '';


  constructor() { }

  ngOnInit() {
  }

  submitItem() {
    console.log(this.title, this.url, this.text);
  }

}
