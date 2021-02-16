import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SectionsMenu } from 'src/app/core/models/chapter.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { sections } from '../../../core/data/menu';
@Component({
  selector: 'app-sidebar-cms',
  templateUrl: './sidebar-cms.component.html',
  styleUrls: ['./sidebar-cms.component.scss'],
})
export class SidebarCmsComponent implements OnInit {
  /**s
   * @description arreglo que contiene la estructura de capitulos del curso
   */
  sections: SectionsMenu[];
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
    this.sections = sections;
  }
}
