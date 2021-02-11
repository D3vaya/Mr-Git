import { Routes } from '@angular/router';

export const CMS_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../cms/cms.module').then((m) => m.CmsModule),
  },
];
