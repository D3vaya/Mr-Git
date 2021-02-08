import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterContainerComponent } from './containers/chapter-container/chapter-container.component';
import { CoverPageComponent } from './components/cover-page/cover-page.component';
import { CHAPTERS_ROUTES } from './routes/chapters.routes';
const routes: Routes = [
  { path: '', component: CoverPageComponent },
  {
    path: 'config/:tag',
    component: ChapterContainerComponent,
    children: CHAPTERS_ROUTES,
  },
  {
    path: 'repository/:tag',
    component: ChapterContainerComponent,
    children: CHAPTERS_ROUTES,
  },
  {
    path: 'commands/:tag',
    component: ChapterContainerComponent,
    children: CHAPTERS_ROUTES,
  },
  {
    path: 'branch-merge/:tag',
    component: ChapterContainerComponent,
    children: CHAPTERS_ROUTES,
  },
  {
    path: 'remote/:tag',
    component: ChapterContainerComponent,
    children: CHAPTERS_ROUTES,
  },
  {
    path: 'inspection/:tag',
    component: ChapterContainerComponent,
    children: CHAPTERS_ROUTES,
  },
  {
    path: 'patching/:tag',
    component: ChapterContainerComponent,
    children: CHAPTERS_ROUTES,
  },
  {
    path: 'debugging/:tag',
    component: ChapterContainerComponent,
    children: CHAPTERS_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
