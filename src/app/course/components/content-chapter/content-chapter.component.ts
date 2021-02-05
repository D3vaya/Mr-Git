import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationEnd } from '@angular/router';
import { HighlightResult } from 'ngx-highlightjs';
import { Location } from '@angular/common';

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
  currentPath = '';

  constructor(location: Location, router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this.buildFullRoute(location);
      }
    });
  }

  ngOnInit(): void {}

  /**
   * @description falta regularizar con expresiones regulares
   */
  buildFullRoute(location: Location): string {
    const arrayPath = location.path(true).split('/');
    const staticFolder = 'assets/static/site-' + arrayPath[2];
    const path = arrayPath[3];
    this.captureRoute(arrayPath);
    return staticFolder + '/' + path + '.md';
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

  captureRoute(arrayPath) {
    this.params.title = arrayPath[3];
    this.params.image = this.setImage(arrayPath[2]);
  }

  /**
   * @description esta asquerosidad debo cambiarla, es solo momentanea
   */
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
    //console.log(even);
  }
  onError(even) {
    //console.log(even);
  }
}
