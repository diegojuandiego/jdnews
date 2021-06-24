import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-page-contact',
  templateUrl: './news-page-contact.component.html',
  styleUrls: ['./news-page-contact.component.scss']
})
export class NewsPageContactComponent implements OnInit {

  constructor(private titleService: Title) { titleService.setTitle("Contacto"); }

  ngOnInit(): void {
  }

}
