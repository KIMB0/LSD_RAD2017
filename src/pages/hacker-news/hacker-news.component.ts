import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.css']
})
export class HackerNewsComponent implements OnInit {

  public list: any;

  constructor(private itemService: ItemService, private router: Router) {
  }

  ngOnInit() {
    this.itemService.getLastItems().subscribe(response => {
      this.list = response;
    }, err => alert('Something went wrong - try again!'), () => '');
  }

  goToSelectedStory(selectedStory) {
    this.router.navigate(['/selectedstory'], selectedStory);
  }

}
