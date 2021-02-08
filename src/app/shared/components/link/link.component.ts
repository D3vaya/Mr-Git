import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chapter } from 'src/app/core/models/chapter.model';
enum stateMenu {
  Off = 'flechaderecha.svg',
  On = 'flechaabajo.svg',
}
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() params: Chapter;
  /**
   * @description arreglo que contiene la estructura de capitulos del curso
   */

  constructor(private router: Router) {}
  img: string;

  ngOnInit(): void {
    this.img = stateMenu.Off;
  }

  open() {
    this.params.open = !this.params.open;
    this.changeStatusImg();
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
