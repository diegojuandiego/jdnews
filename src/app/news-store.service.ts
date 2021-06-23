import { Injectable } from '@angular/core';
import { Noticia } from 'src/assets/feed/feed';

/*
**    Maneja el almacenamiento tipo store de una Noticia
*/

@Injectable({
  providedIn: 'root'
})


export class NewsStoreService {

  noticia!: Noticia;

  constructor() { }

  cargarNoticia(n:Noticia) { this.noticia = n; console.log(this.noticia.title);}

}
