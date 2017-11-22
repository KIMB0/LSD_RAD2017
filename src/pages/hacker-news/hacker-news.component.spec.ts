import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HackerNewsComponent } from './hacker-news.component';
import { ItemService } from '../../services/item.service';


describe('HackerNewsComponent', () => {
  let component: HackerNewsComponent;
  let fixture: ComponentFixture<HackerNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ HackerNewsComponent ],
      providers: [
        ItemService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
