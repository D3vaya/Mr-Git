import { Injectable } from '@angular/core';
import { Link } from '../models/link.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  getChapters(): Array<Link> {
    return [
      {
        path: '/courses/config',
        icon: 'chapters/one/proceso.svg',
        class: 'text-dark',
        title: 'Config & Setup',
      },
      {
        path: 'add',
        icon: 'dev/computadora.svg',
        class: 'text-dark',
        title: 'Creación de repos',
      },
      {
        path: 'status',
        icon: 'chapters/capacitacion.svg',
        class: 'text-dark',
        title: 'Comandos basicos',
      },
      {
        path: 'diff',
        icon: 'chapters/red.svg',
        class: 'text-dark',
        title: 'Ramas y Merge',
      },
      {
        path: 'commit',
        icon: 'chapters/sitio-web.svg',
        class: 'text-dark',
        title: 'Remote Branches',
      },
    ];
  }
  chapter() {}
}
