import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { HighlightResult } from 'ngx-highlightjs';
@Component({
  selector: 'app-content-chapter',
  templateUrl: './content-chapter.component.html',
  styleUrls: ['./content-chapter.component.scss'],
})
export class ContentChapterComponent implements OnInit {
  params = {
    title: '',
    image: '',
  };
  response: HighlightResult;
  code = `git clone https://github/D3vaya`;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.captureRoute();
  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}',
    };
  }

  captureRoute() {
    this.params.title = this.activeRoute.snapshot.params.tag;
    const segment: any = this.activeRoute.snapshot.params;
    this.params.image = this.setImage(segment.tag);
    console.log(this.params.title, segment.tag);
  }

  setImage(segment: string) {
    switch (segment) {
      case 'git':
        return 'engranaje.svg';
      case 'repository':
        return 'caja.svg';
      case 'commands':
        return 'capacitacion.svg';
      case 'branch-merge':
        return 'rompecabezas.svg';
      case 'remote':
        return 'sitio-web.svg';
      case 'inspection':
        return 'sitio-web.svg';
      case 'patching':
        return 'parche.svg';
      case 'debugging':
        return 'bug.svg';
      default:
        return 'git.svg';
    }
  }
  onLoad(even) {
    console.log(even);
  }
  onError(even) {
    console.log(even);
  }
}
