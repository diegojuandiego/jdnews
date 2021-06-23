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
              title: "Coscu Army Awards: los streamers tienen sus premios",
              link: "https://www.telam.com.ar/notas/202012/538975-coscu-army-awards-los-streamers-tienen-sus-premios.html",
              description: "Este domingo se entregan a partir de las 20 los Coscu Army Awards que distinguen las mejores performances del año de la comunidad streamer argentina, en una ceremonia que se puede seguir a través de Twitch.",
              pubDate: "Fri, 18 Dec 2020 17:04:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2020/12/5fdd20ac57971.jpg",
              body: ""
          },

          {
              title: "El uso de dinero electrónico en la Argentina fue récord en 2018",
              link: "https://www.telam.com.ar/notas/201901/327333-el-uso-de-dinero-electronico-en-la-argentina-fue-record-en-2018.html",
              description: "Alcanzó un promedio de $226.000 millones, un nivel récord en la Argentina al representar casi el 30% del total de los depósitos privados, según el índice de medición de UDE Link.",
              pubDate: "Mon, 28 Jan 2019 18:32:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2017/03/58bd32b156bd6.jpg",
              body: ""
          },

          {
              title: "Hackearon casi 700 mil sitios para robarles bitcoins",
              link: "https://www.telam.com.ar/notas/201811/303519-sitios-hackeados-robo-bitcoins.html",
              description: "Fue el sábado, y todavía se desconoce el monto total del botín. Al parecer, los ciberdelincuentes hackearon las webs violando la seguridad de la página StatCounter, que se utiliza para contar la cantidad de visitas al día.",
              pubDate: "Wed, 07 Nov 2018 13:11:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2016/11/5827155bd8d3a.jpg",
              body: ""
          },

          {
              title: "Google eliminó más de 3.000 millones de links por infringir derechos de autor",
              link: "https://www.telam.com.ar/notas/201811/303513-google-elimina-links-derechos-de-autor.html",
              description: "Así lo reveló en su informe \"Contra la piratería\" (How Google Fights Piracy), que aborda las \"políticas y tecnologías\" que aplica la compañía.",
              pubDate: "Wed, 07 Nov 2018 13:03:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2016/12/584fe3df13694.jpg",
              body: ""
          },

          {
              title: "La UE desarrolla el uso de inteligencia artificial para admitir el ingreso de extranjeros",
              link: "https://www.telam.com.ar/notas/201811/302079-la-ue-desarrolla-el-uso-de-inteligencia-artificial-para-admitir-el-ingreso-de-extranjeros.html",
              description: "Si el software determinara que el viajero no dice la verdad, se lo indicará a un oficial de frontera, que tendrá la última palabra para dejarlo pasar o no.",
              pubDate: "Thu, 01 Nov 2018 17:00:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/editadas/5b304e9cd8b5d.jpg",
              body: ""
          },

          {
              title: "California aprobó en su territorio los test de coches autónomos sin personas a bordo",
              link: "https://www.telam.com.ar/notas/201810/301782-california-aprobo-en-su-territorio-los-test-de-coches-autonomos-sin-personas-a-bordo.html",
              description: "El Departamento de Vehículos Motorizados de ese estado anunció la novedad en conjunto con la automotriz de Google, Waymo.",
              pubDate: "Wed, 31 Oct 2018 18:49:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2018/10/5bda1a989bb52.jpg",
              body: ""
          },

          {
              title: "Waze incorpora en la Argentina la emisión de radio y audiolibros",
              link: "https://www.telam.com.ar/notas/201810/301422-la-app-de-navegacion-satelital-waze-incorpora-en-la-argentina-la-emision-de-radio-y-audiolibros.html",
              description: "La app de navegación satelital que brinda información de mapeo de calles y rutas en modo offline, sumó los servicios de TuneIn y Scribd.",
              pubDate: "Tue, 30 Oct 2018 16:35:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2018/05/5ae9fc41b8ec9.jpg",
              body: ""
          },

          {
              title: "Apple presentó una tablet orientada al uso avanzado, una desktop y una notebook ",
              link: "https://www.telam.com.ar/notas/201810/301449-apple-presento-en-nueva-york-una-tablet-orientada-al-uso-avanzado-una-desktop-y-una-notebook.html",
              description: "Este martes en la Academia de Música de Brooklyn en Nueva York la compañía presentó las nuevos productos con valores que van desde los us$ 799 para la Mac Mini hasta los us$ 1199 para Mac Book Air, entre otros.",
              pubDate: "Tue, 30 Oct 2018 15:30:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2018/10/5bd8acafc9e97.jpg%20%20%20%20%20%20565_1004x565.jpg",
              body: ""
          },

          {
              title: "Cómo evitar ser hackeado mientras se hace una compra por internet ",
              link: "https://www.telam.com.ar/notas/201810/301152-como-evitar-ser-hackeado-mientras-se-hace-una-compra-por-internet.html",
              description: "El año pasado, según un informe de la Cámara Argentina de Comercio Electrónico (Cace), se realizaron 1,58 millones de ventas online.",
              pubDate: "Mon, 29 Oct 2018 16:01:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2017/02/58a20da65bcf0.jpg",
              body: ""
          },

          {
              title: "Nuevos IPad, MacBook y MacMini entre los posibles anuncios de Apple para mañana",
              link: "https://www.telam.com.ar/notas/201810/301122-nuevos-ipad-macbook-y-macmini-entre-los-posibles-anuncios-de-apple-manana.html",
              description: "La empresa convocó para mañana a un evento donde anunciará varias novedades en materias de hardware, y pese al hermetismo que rodea las novedades, trascendió que los lanzamientos serían dos tablets, cambios en las portátiles MacBook y en la computadora de escritorio MacMini.",
              pubDate: "Mon, 29 Oct 2018 11:53:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2015/04/554236019fd79.jpg",
              body: ""
          },

          {
              title: "Logran reducir con microalgas la contaminación de metales pesados en el Riachuelo ",
              link: "https://www.telam.com.ar/notas/201810/300261-logran-reducir-con-microalgas-la-contaminacion-de-metales-pesados-en-el-riachuelo.html",
              description: "Las pruebas se hicieron a una escala pre-piloto y resultó eficiente para el tratamiento de esos efluentes que incluso se podrían \"descarga en el conducto cloacal\", explicó la licenciada Adelina Nashiro.",
              pubDate: "Wed, 24 Oct 2018 19:42:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2017/07/596f6a0ef062e.jpg",
              body: ""
          },

          {
              title: "Hackearon una página del sistema de salud y robaron datos de 75.000 personas",
              link: "https://www.telam.com.ar/notas/201810/299736-hackearon-una-pagina-del-sistema-de-salud-y-robaron-datos-de-75000-personas.html",
              description: "No se informó qué comprendían los datos, pero pueden ir desde nombres y números del seguro social hasta historias clínicas completas, que es lo que habitualmente se encuentra allí.",
              pubDate: "Mon, 22 Oct 2018 17:07:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2016/11/5827155bd8d3a.jpg",
              body: ""
          },

          {
              title: "Publican un importante hallazgo en nanofísica con el aporte de un investigador del Conicet",
              link: "https://www.telam.com.ar/notas/201810/299337-publican-importante-hallazgo-en-nanofisica-que-tuvo-aporte-de-un-investigador-del-conicet.html",
              description: "Se trata de un trabajo que describe cómo es posible medir y manipular el acople hiperfino de átomos magnéticos, en el que participó el argentino Alejandro Ferrón.",
              pubDate: "Fri, 19 Oct 2018 17:13:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2018/10/5bca3c526a77e.jpg",
              body: ""
          },

          {
              title: "Facebook abre un centro de control contra noticias falsas de cara a las elecciones ",
              link: "https://www.telam.com.ar/notas/201810/299166-facebook-abre-un-centro-de-control-contra-noticias-falsas-de-cara-a-las-elecciones-en-eeuu.html",
              description: "Se trata de una unidad de control que la red social inauguró en su sede de California con el objetivo de limitar la filtración de las famosas \"fake news\" como se propagaron durante las elecciones presidenciales de 2016.",
              pubDate: "Thu, 18 Oct 2018 16:48:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2016/11/582372ac11587.jpg",
              body: ""
          },

          {
              title: "Un hacker arregla problemas de seguridad en miles de routers",
              link: "https://www.telam.com.ar/notas/201810/298887-un-hacker-que-arregla-problemas-de-seguridad-en-miles-de-routers.html",
              description: "Se trata del \"parcheado\" de los routers de la marca MikroTik que fue realizado a través líneas de código escritas por un pirata informático conocido como Alexey, quien lo hizo público a través de su cuenta en Telegram.",
              pubDate: "Wed, 17 Oct 2018 15:04:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2016/09/57cdd5793bf36.jpg",
              body: ""
          },

          {
              title: "Desconexión de servidores y saturación del servicio, algunas de las causas",
              link: "https://www.telam.com.ar/notas/201810/298842-desconexion-de-servidores-y-saturacion-del-servicio-algunas-de-las-causas.html",
              description: "Ocurrió anoche y la atribuyen al \"error 503\".",
              pubDate: "Wed, 17 Oct 2018 13:34:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2018/10/5bc8679266387.jpg",
              body: ""
          },

          {
              title: "Google está trabajando en el regreso del buscador a China",
              link: "https://www.telam.com.ar/notas/201810/298644-el-ceo-de-google-reconocio-que-se-esta-trabajando-en-el-regreso-del-buscador-a-china.html",
              description: "\"China es un mercado maravilloso, innovador. Nuestra misión nos obliga a proporcionar información a todos y el país es el 20% de la población mundial\", aseguró el CEO de la multinacional.",
              pubDate: "Tue, 16 Oct 2018 15:57:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2018/10/5bc71994a7ab4.jpg",
              body: ""
          },

          {
              title: "Crearán en Massachusetts un centro dedicado a la inteligencia artificial",
              link: "https://www.telam.com.ar/notas/201810/298608-crearan-en-eeuu-un-centro-de-altos-estudios-dedicado-a-la-inteligencia-artificial.html",
              description: "Se trata de una Facultad únicamente dedicada a la inteligencia artificial que apunta a especializarse en áreas de investigación de neurociencias y ciencias de la computación, entre otras.",
              pubDate: "Tue, 16 Oct 2018 15:03:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2018/10/5bc627a7035f0.jpg",
              body: ""
          },

          {
              title: "Facebook, Google y otras plataformas aceptan el código de conducta para las elecciones ",
              link: "https://www.telam.com.ar/notas/201810/298572-facebook-google-y-otras-plataformas-aceptan-codigo-de-conducta-para-elecciones-en-la-ue.html",
              description: "La UE apunta a proveer de \"herramientas a los usuarios para que hagan sus elecciones políticas informados\".",
              pubDate: "Tue, 16 Oct 2018 12:34:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2018/06/5b1a7513e44b5.jpg",
              body: ""
          },

          {
              title: "Murió Paul Allen, el cofundador de Microsoft",
              link: "https://www.telam.com.ar/notas/201810/298452-murio-paul-allen-el-cofundador-de-microsoft.html",
              description: "En un comunicado, los parientes de Allen precisaron que el emprendedor murió por la tarde en Seattle (en el estado de Washington, donde Microsoft tiene su sede) a causa de un linfoma no hodgkiniano, un cáncer en los linfocitos de la sangre.",
              pubDate: "Mon, 15 Oct 2018 20:02:00 -0300",
              enclosure: "https://www.telam.com.ar/advf/imagenes/2018/10/5bc5c0cc8c443.jpg",
              body: ""
          },
      ];

  constructor() { }

  ngOnInit(): void {
  }

}
