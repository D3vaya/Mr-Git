import { Routes } from '@angular/router';

export const COURSE_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../course/course.module').then((m) => m.CourseModule),
  },
];
