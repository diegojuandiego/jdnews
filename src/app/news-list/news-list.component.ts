import { Component, OnInit } from '@angular/core';
import { NewsStoreService } from '../news-store.service';
import { NewsServeService } from '../news-serve.service';
import { Title } from '@angular/platform-browser';
import { Noticia } from 'src/assets/feed/feed';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss', '../../assets/css/estilos.css']
})
export class NewsListComponent implements OnInit {
  
  noticias:Noticia[] = this.feedNoticias.getFeed(this.noticia.getFiltro()); //Cargo todas las noticias desde mi "simulador de API"
 
  readNoticia(n:Noticia) { this.noticia.storeNoticia(n); } //Método que dispara el almacenamiento de una noticia en el servicio, utilizando método de este último.
  getFiltro():boolean { return this.noticia.getFiltro() } //Método que averigua si el servicio está filtrando
  
    constructor(private feedNoticias:NewsServeService, private noticia:NewsStoreService, private titleService: Title) { 
    titleService.setTitle("Noticias");
  }
  ngOnInit(): void {
  }

}
