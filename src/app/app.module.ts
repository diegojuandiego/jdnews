import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsPageAboutComponent } from './news-page-about/news-page-about.component';
import { NewsPageContactComponent } from './news-page-contact/news-page-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsViewComponent,
    NewsPageAboutComponent,
    NewsPageContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
