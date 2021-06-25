import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsStoreService } from './news-store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/css/estilos.css']
})


export class AppComponent {
  title = 'JDNews';
  
  // Para cambiar el título de la web al que yo quiero tengo que inyectar el servicio Title.
  // Y de paso termino con un método que me va a ayudar a cambiar el título tras routing.
  public constructor(private n:NewsStoreService, private titleService: Title) { this.titleService.setTitle(this.title); } 

  // Método para setear el título de la web.
  public setTitle(t:string) { this.titleService.setTitle(this.title); }
  // Método para aislar el funcionamiento del filtro por "destacadas" en este scope
  public filtrar(val:boolean = true) { this.n.setFiltro(val); }

}