import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { forwardRef } from '@angular/core/src/di/forward_ref';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-selected-story',
  templateUrl: './selected-story.component.html',
  styleUrls: ['./selected-story.component.css']
})
export class SelectedStoryComponent implements OnInit {
  private item: any;
  private kids: any = [];
  public by = undefined;
  public text: string;
  public isLoggedIn: boolean;

  constructor(private router: ActivatedRoute, private itemService: ItemService) {
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

    if (localStorage.getItem('username')) {
      this.by = localStorage.getItem('username');
    }
  }

  getKids() {
    const kidsArray = this.item.kids.split(',').map(Number);
    for (const number of kidsArray) {
      this.itemService.getItemsById(number).subscribe(response => {
        this.kids.push(response);
      });
    }
  }

  postComment() {
    if (this.isLoggedIn === true) {

      const object = {
        'id': this.item.id,
        'deleted': 'false',
        'type': 'comment',
        'by': this.by,
        'timestamp': '1509301289',
        'text': this.text,
        'dead': 'false',
        'parent': '0',
        'poll': [],
        'kids': [],
        'url': '',
        'score': '0',
        'title': '',
        'parts': [],
        'descendants': 1
      };
      this.itemService.postComment(object.id, object).subscribe(() => {
        '';
      }, err => alert('Something went wrong!'),
        this.kids.push(object) //PRØV HER
      );
    } else {
      alert('You have to be signed in to comment!');
    }
  }

  // MULIGT HER = Kun lave 'this.item = params'. Her kan vi så efterfølgende lave et http-kald på getItemsById og
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.item = params;
      if (this.item.kids !== 'null' || this.item.kids !== -1 ) {
        this.getKids();
      }
    });
  }

}
