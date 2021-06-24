import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/assets/feed/feed';
import { NewsStoreService } from '../news-store.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss', '../../assets/css/estilos.css']
})
export class NewsViewComponent implements OnInit {

  noticia!: Noticia;

  constructor(private n:NewsStoreService, private titleService: Title) {
    if(this.n) this.noticia = this.n.getNoticia();
    titleService.setTitle(n.getNoticia().title);
  }

  ngOnInit(): void {
  }

}
