import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/assets/feed/feed';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss', '../../assets/css/estilos.css']
})
export class NewsListComponent implements OnInit {
  
    noticias : Noticia[] =
      [
          {
              title: "Piden prisión perpetua para los acusados de asesinar a la piloto Zaira Rodríguez", 
              link: "https://www.telam.com.ar/notas/202106/558181-alegatos-juicio-crimen-piloto-kartings-zaira-rodriguez.html", 
              description: "El pedido de pena máxima para ambos acusados fue realizado por el titular de la Unidad Funcional de Instrucción (UFI) 1 de San Martín, Fabricio Lovine. Zaira Rodríguez fue baleada en la cabeza durante un robo cometido en noviembre de 2018 en Villa Ballester.", 
              pubDate: "Fri, 18 Jun 2021 16:06:00 -0300", 
              enclosure: "http://www.telam.com.ar/advf/imagenes/2021/06/60c633dd6e6ec.jpg"
          },
          {
              title: "Habrá audiencia oral solicitada por Cristina Kirchner en la causa del memorándum con Irán", 
              link: "https://www.telam.com.ar/notas/202106/558253-celebraran-audiencia-oral-solicitada-cristina-kirchner-causa-memorandum-iran.html", 
              description: "Aunque aún no se fijó la fecha, el juzgado responde a un pedido formulado por la defensa de la expresidenta para exponer los planteos de nulidad respecto de lo actuado por el juex Bonadío en la causa.", 
              pubDate: "Fri, 18 Jun 2021 16:01:00 -0300", 
              enclosure: "https://www.telam.com.ar/advf/imagenes/2021/06/60c7993551af8.jpg"
          },
          {
              title: "Cuáles son los principales síntomas de la variante Delta", 
              link: "https://www.telam.com.ar/notas/202106/558240-coronavirus-cepa-celta-sintomas.html", 
              description: "Investigadores señalaron que los dolores de cabeza, la secreción nasal y el resfrío son los primeros síntomas que se presentan con esta variante del coronavirus.", 
              pubDate: "Fri, 18 Jun 2021 15:11:00 -0300", 
              enclosure: "https://www.telam.com.ar/advf/imagenes/2021/05/609132f261cab.jpg"
          },
          {
              title: "Kicillof anticipó que se enviarán 1,5 millones de turnos para vacunar a toda la población priorizada", 
              link: "https://www.telam.com.ar/notas/202106/558226-axel-kicillof-coronavirus-vacuna.html", 
              description: "El gobernador bonaerense dijo que, 'desde mañana, cualquier persona que tenga más de 55 años puede acceder a la inmunización libre', sin turno previo.", 
              pubDate: "Fri, 18 Jun 2021 15:06:00 -0300", 
              enclosure: "https://www.telam.com.ar/advf/imagenes/2021/06/60bbd43d693c0.jpg"
          },  
          {
              title: "No hay excusas para que la Corte siga avalando arbitrariedades", 
              link: "https://www.telam.com.ar/notas/202106/558247-milagro-sala-soria.html", 
              description: "Tras la nueva sentencia de 3 años y medio de prisión contra la dirigente social por daños y amenazas, el ministro de Justicia consideró que &amp;ldquo;la persecución política y judicial contra Milagro Sala está motorizada por la misoginia y el racismo&amp;rdquo;.", 
              pubDate: "Fri, 18 Jun 2021 14:46:00 -0300", 
              enclosure: "https://www.telam.com.ar/advf/imagenes/2021/03/60650f1b5ed73.jpg"
          },
          {
              title: "El Gobierno avanza en un acuerdo con el sector de la carne", 
              link: "https://www.telam.com.ar/notas/202106/558239-gobierno-avanza-acuerdo-sector-carne-programa-anuncios-semana-proxima.html", 
              description: "La novedad se comunicará el martes. En los próximos días continuarán las reuniones con los distintos sectores de la cadena, a fin de pulir objetivos e instrumentos en el marco del plan ganadero.", 
              pubDate: "Fri, 18 Jun 2021 13:23:00 -0300", 
              enclosure: "https://www.telam.com.ar/advf/imagenes/2021/05/60a39e054fa24.jpg"
          },
      ];

  constructor() { }

  ngOnInit(): void {
  }

}
