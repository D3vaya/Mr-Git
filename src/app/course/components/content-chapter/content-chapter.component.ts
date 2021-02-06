import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationEnd } from '@angular/router';
import { HighlightResult } from 'ngx-highlightjs';
import { Location } from '@angular/common';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

enum CodeResponse {
  Error = 404,
}
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
  showNotFound = false;

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
    this.params.image = arrayPath[2] + '.svg';
  }

  onLoad(event) {
    console.log(event);
    this.showNotFound = false;
  }
  onError(event: HttpErrorResponse) {
    console.log(event);
    if (event.status === CodeResponse.Error) {
      this.showNotFound = true;
      console.log('Lo sentimos, este capitulo se encuentra en desarrollo');
    }
  }
}
