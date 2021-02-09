import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/core/services/utils.service';
import { Business } from 'src/app/core/models/business';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-nav-courses',
  templateUrl: './nav-courses.component.html',
  styleUrls: ['./nav-courses.component.scss'],
})
export class NavCoursesComponent implements OnInit {
  /**
   * @description arreglo que contiene la estructura de capitulos del curso
   */
  /**
   * @description variable que controla si se ve o no el toggle del header
   */
  menuVisible = false;
  /**
   * @description Objeto que referencia a las constante business
   */
  businessStyle: Business = environment.business;
  /**
   * @description controla que logo de mr git muestra en el header
   */
  logoBrand = 'landing/logo.svg';

  constructor(private utilsService: UtilsService, private router: Router) {
    if (this.businessStyle.business) {
      this.logoBrand = 'commons/logo-corp.svg';
    }
  }

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
