import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-selected-story',
  templateUrl: './selected-story.component.html',
  styleUrls: ['./selected-story.component.css']
})
export class SelectedStoryComponent implements OnInit {
  private item: any;

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.item = params;
    });
  }

  ngOnInit() {
  }

}
