import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { CoursesLayoutComponent } from './layouts/courses-layout/courses-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { COURSE_ROUTES } from './routes/course.routes';
import { LANDING_ROUTES } from './routes/landing.routes';
import { CMS_ROUTES } from './routes/cms.routes';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: LANDING_ROUTES,
  },
  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: COURSE_ROUTES,
  },
  {
    path: 'cms',
    component: PrivateLayoutComponent,
    children: CMS_ROUTES,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
