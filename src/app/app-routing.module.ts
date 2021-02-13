import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { CoursesLayoutComponent } from './layouts/courses-layout/courses-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { COURSE_ROUTES } from './routes/course.routes';
import { LANDING_ROUTES } from './routes/landing.routes';
import { CMS_ROUTES } from './routes/cms.routes';
import { AUTH_ROUTES } from './routes/auth.routes';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  AngularFireAuthGuard,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['cms']);

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
    path: 'login',
    component: PublicLayoutComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
    children: AUTH_ROUTES,
  },
  {
    path: 'cms',
    component: PrivateLayoutComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: CMS_ROUTES,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
