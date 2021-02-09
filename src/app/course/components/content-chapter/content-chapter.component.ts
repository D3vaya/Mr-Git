import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { RouteChapter } from 'src/app/core/models/chapter.model';
import { MarkdownService } from 'ngx-markdown';

enum CodeResponse {
  Error = 404,
}
interface State {
  loading: boolean;
  data: {};
  error: null;
}

@Component({
  selector: 'app-content-chapter',
  templateUrl: './content-chapter.component.html',
  styleUrls: ['./content-chapter.component.scss'],
})
export class ContentChapterComponent implements OnInit {
  params: RouteChapter = {
    title: '',
    image: '',
    context: false,
  };
  state: State = {
    loading: true,
    data: {},
    error: null,
  };
  /**
   * @description ruta del site markdown a mostrar
   */
  pathSite = '';
  /**
   * @description controla si se ve el componente notfound del curso
   */
  visibleNotFound = false;
  markdown: string;

  constructor(
    location: Location,
    router: Router,
    private markDownService: MarkdownService
  ) {
    router.events.subscribe((event: Event) => {
      this.state.loading = true;
      if (event instanceof NavigationEnd) {
        this.pathSite = this.buildFullRoute(location);
        this.markDownService.getSource(this.pathSite).subscribe(
          (site) => {
            this.state.loading = false;
            this.visibleNotFound = false;
            this.markdown = site;
          },
          (error) => {
            this.state.loading = false;
            this.state.error = error;
            this.visibleNotFound = true;
            console.log(error);
          }
        );
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

  captureRoute(arrayPath) {
    this.params.title = arrayPath[3];
    this.params.image = arrayPath[2] + '.svg';
    if (arrayPath[3] === 'context') {
      this.params.title = 'Contexto';
      this.params.image = arrayPath[3] + '.svg';
    }
  }

  onLoad(event) {
    this.visibleNotFound = false;
  }

  onError(event: HttpErrorResponse) {
    if (event.status === CodeResponse.Error) {
      this.visibleNotFound = true;
      console.log('Lo sentimos, este capitulo se encuentra en desarrollo');
    }
  }
}
