import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterContainerComponent } from './containers/chapter-container/chapter-container.component';
import { ListChaptersComponent } from './containers/list-chapters/list-chapters.component';

const routes: Routes = [{ path: '', component: ChapterContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
