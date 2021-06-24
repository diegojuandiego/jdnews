import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes para rutear
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsPageAboutComponent } from './news-page-about/news-page-about.component';
import { NewsPageContactComponent } from './news-page-contact/news-page-contact.component';
import { NewsViewComponent } from './news-view/news-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'noticias', pathMatch:'full'},
  {path: 'noticias', component: NewsListComponent},
  {path: 'destacadas', component: NewsListComponent},
  {path: 'read', component: NewsViewComponent},
  {path: 'about', component: NewsPageAboutComponent},
  {path: 'contacto', component: NewsPageContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
