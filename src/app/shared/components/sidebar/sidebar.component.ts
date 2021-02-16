import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chapter } from 'src/app/core/models/chapter.model';

import { CoursesService } from 'src/app/core/services/courses.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  /**
   * @description arreglo que contiene la estructura de capitulos del curso
   */
  chapters: Chapter[];
  /**
   * @description observable que esta conectado al cambio del toggle en el header
   */
  status$: Observable<boolean>;
  /**
   * @description oculta el toggle del menu si es smarphone
   */
  classSidebar = 'none';

  constructor(
    private coursesService: CoursesService,
    private utilService: UtilsService
  ) {}

  ngOnInit(): void {
    this.getChapters();
    this.status$ = this.utilService.getStatusSidebar$();
    this.status$.subscribe((status) => {
      if (status) {
        this.classSidebar = 'block';
      } else {
        this.classSidebar = 'none';
      }
    });
  }

  /**
   * @description Trae el arreglo de capitulos para mostrar en el menu
   */
  getChapters() {
    this.chapters = this.coursesService.getChapters();
  }
}
