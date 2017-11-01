import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { NewComponent } from './new/new.component';
import { CommentsComponent } from './comments/comments.component';
import { ShowComponent } from './show/show.component';
import { AskComponent } from './ask/ask.component';
import { JobsComponent } from './jobs/jobs.component';
import { SubmitComponent } from './submit/submit.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth.service';
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    HackerNewsComponent,
    NewComponent,
    CommentsComponent,
    ShowComponent,
    AskComponent,
    JobsComponent,
    SubmitComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'news', component: HackerNewsComponent },
      { path: 'newest', component: NewComponent },
      { path: 'newcomments', component: CommentsComponent },
      { path: 'show', component: ShowComponent },
      { path: 'ask', component: AskComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'submit', component: SubmitComponent },
      { path: 'app-login', component: LoginComponent },
      { path: '**', redirectTo: 'news', pathMatch: 'full' },

    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
