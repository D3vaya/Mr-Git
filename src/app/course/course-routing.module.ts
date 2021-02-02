import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListChaptersComponent } from './list-chapters/list-chapters.component';

const routes: Routes = [{ path: '', component: ListChaptersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
