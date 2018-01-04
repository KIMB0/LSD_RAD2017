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

  constructor(private router: ActivatedRoute, private itemService: ItemService) {
    this.router.params.subscribe(params => {
      this.item = params;
      if (this.item.kids !== 'null' ) {this.getKids(); }
    });
  }

  getKids() {
    const kidsArray = this.item.kids.split(',').map(Number);
    for (const number of kidsArray) {
      this.itemService.getItemsById(number).subscribe(response => {
        this.kids.push(response); console.log(this.kids);
      });
    }
  }

  ngOnInit() {
  }

}
