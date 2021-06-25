import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/assets/feed/feed';
import { NewsStoreService } from '../news-store.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss', '../../assets/css/estilos.css']
})
export class NewsViewComponent implements OnInit {

  noticia!: Noticia;
  private naux!: Noticia;

  constructor(private n: NewsStoreService, private titleService: Title, private router: Router) {
    this.naux = this.n.getNoticia();
    if(this.naux) this.noticia = this.naux; else router.navigate(['/']); //Lógica para redireccionar si la noticia almacenada está vacía (en el caso de entrar manualmente a la URL)
    titleService.setTitle(n.getNoticia().title); //Título de la página
  }

  ngOnInit(): void {
  }

}
