import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/assets/feed/feed';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  @Input() noticia!: Noticia;

  constructor() { }

  ngOnInit(): void {
  }

}
