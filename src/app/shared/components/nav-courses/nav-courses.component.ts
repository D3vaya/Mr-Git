import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/core/services/utils.service';
import { Link } from '../../../core/models/link.model';
@Component({
  selector: 'app-nav-courses',
  templateUrl: './nav-courses.component.html',
  styleUrls: ['./nav-courses.component.scss'],
})
export class NavCoursesComponent implements OnInit {
  /**
   * @description arreglo que contiene la estructura de capitulos del curso
   */
  chapters: Link[];
  /**
   * @description arreglo que contiene la estructura de capitulos del curso
   */
  /**
   * @description variable que controla si se ve o no el toggle del header
   */
  menuVisible = false;

  constructor(private utilsService: UtilsService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * @description metodo que entrage en el estado actual del toggle-menu en el header
   */
  activeSidebar(event) {
    this.menuVisible = !this.menuVisible;
    this.utilsService.sendStatusSidebar(this.menuVisible);
  }

  routerLanding() {
    this.router.navigate(['/']);
  }
}
