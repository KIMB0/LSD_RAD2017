import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';


@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.css']
})
export class HackerNewsComponent implements OnInit {

  public list = [];

  constructor(private testService: TestServiceService ) {
    this.list = [{
      'titel' : 'The best search engine in the world! ',
      'websitelink' : 'google.com',
      'points' : 32,
      'username' : 'Kimbo1992',
      'date' : '5 hours ago ',
      'commentcount' : 2
    }, {
      'titel' : 'A funny website...',
      'websitelink' : 'imgur.com',
      'points' : 5,
      'username' : 'JohnnyMan',
      'date' : '23 hours ago ',
      'commentcount' : 67
    }];
  }

  ngOnInit() {

  }

  testHttp() {
    this.testService.getHttp();
  }
}
