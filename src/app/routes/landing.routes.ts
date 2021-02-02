import { Routes } from '@angular/router';

export const LANDING_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../landing/landing.module').then((m) => m.LandingModule),
  },
];
