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
  
  storeNoticia(n:Noticia) { this.noticia = n } //Método que almacena la noticia en el servicio
  getNoticia(): Noticia { return this.noticia } //Método que devuelve el contenido de la noticia que tengo almacenada
  setFiltro(v:boolean = true) { this.filtroDestacadas = v; } //Método que setea la indicación de filtro
  getFiltro():boolean { return this.filtroDestacadas; } //Método que devuelve la indicación de filtro
  
  constructor() { }
}
