import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
//import { Noticia } from 'src/assets/feed/feed';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/css/estilos.css']
})


export class AppComponent {
  title = 'JDNews';
  
  // Para cambiar el título de la web al que yo quiero tengo que inyectar el servicio Title.
  // Y de paso termino con un método que me va a ayudar a cambiar el título tras routing.
  public constructor(private titleService: Title) { this.titleService.setTitle(this.title); } 

  // Método para setear el título de la web.
  public setTitle(t:string) { this.titleService.setTitle(this.title); }
}