import { Injectable } from '@angular/core';
import { Noticia } from 'src/assets/feed/feed';

/*
**    Maneja el almacenamiento tipo store de una Noticia
*/

@Injectable({
  providedIn: 'root'
})


export class NewsStoreService {

  private noticia!: Noticia;
  private filtroDestacadas:boolean = false;

  constructor() { }

  //Método que almacena la noticia en el servicio
  storeNoticia(n:Noticia) { this.noticia = n }
  //Método que devuelve el contenido de la noticia que tengo almacenada
  getNoticia(): Noticia { return this.noticia } 
  
  //Método que avisa si hay que filtrar las noticias (destacadas vs todas las noticias)
  setFiltro(v:boolean = true) { this.filtroDestacadas = v; } 
  getFiltro():boolean { return this.filtroDestacadas; }

}
