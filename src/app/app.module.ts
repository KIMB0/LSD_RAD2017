import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HackerNewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'hackernews', component: HackerNewsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
