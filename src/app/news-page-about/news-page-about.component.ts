import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-page-about',
  templateUrl: './news-page-about.component.html',
  styleUrls: ['./news-page-about.component.scss']
})
export class NewsPageAboutComponent implements OnInit {

  constructor(private titleService: Title) { titleService.setTitle("Acerca del sitio"); }

  ngOnInit(): void {
  }

}
