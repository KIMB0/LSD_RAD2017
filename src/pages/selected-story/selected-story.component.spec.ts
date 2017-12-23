import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedStoryComponent } from './selected-story.component';

describe('SelectedStoryComponent', () => {
  let component: SelectedStoryComponent;
  let fixture: ComponentFixture<SelectedStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
