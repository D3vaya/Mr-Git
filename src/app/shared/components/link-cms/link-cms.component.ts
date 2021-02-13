import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Business } from 'src/app/core/models/business.model';
import { SectionsMenu } from 'src/app/core/models/chapter.model';
import { environment } from 'src/environments/environment';
enum stateMenu {
  Off = 'flechaderecha.svg',
  On = 'flechaabajo.svg',
}
@Component({
  selector: 'app-link-cms',
  templateUrl: './link-cms.component.html',
  styleUrls: ['./link-cms.component.scss'],
})
export class LinkCmsComponent implements OnInit {
  @Input() params: SectionsMenu;
  /**
   * @description arreglo que contiene la estructura de capitulos del curso
   */

  businessStyle: Business = environment.business;
  img: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.img = stateMenu.Off;
  }

  /**
   * @description cambia el icono de la flecha si esta arriba o abajo
   */
  changeStatusImg() {
    if (this.img == stateMenu.Off) {
      this.img = stateMenu.On;
    } else {
      this.img = stateMenu.Off;
    }
  }
  routerSite(path) {
    this.router.navigate([path]);
  }
}
