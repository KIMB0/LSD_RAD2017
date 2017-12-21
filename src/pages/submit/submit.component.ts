import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  public title = '';
  public url = '';
  public text = '';
  public by = undefined;
  public isLoggedIn: boolean;


  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (this.isLoggedIn !== true) {
      this.router.navigate(['/app-login']);
    }
    if (localStorage.getItem('username')) {
      this.by = localStorage.getItem('username');
    }
  }

  postItem() {
    const object = {
      'id': '2',
      'deleted': 'false',
      'type': 'story',
      'by': this.by,
      'timestamp': '1509301289',
      'text': this.text,
      'dead': 'false',
      'parent': '0',
      'poll': [],
      'kids': [],
      'url': this.url,
      'score': '0',
      'title': this.title,
      'parts': [],
      'descendants': 1
    };

    this.itemService.postItem(object).subscribe(() => {
      '';
    }, err => alert('Something went wrong!'), () => this.router.navigate(['/news']));
  }

}
