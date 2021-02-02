import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BranchesComponent } from './branches/branches.component';
import { ChapterContainerComponent } from './containers/chapter-container/chapter-container.component';
import { ListChaptersComponent } from './list-chapters/list-chapters.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    BranchesComponent,
    ChapterContainerComponent,
    ListChaptersComponent,
  ],
  imports: [CommonModule, CourseRoutingModule],
})
export class CourseModule {}
