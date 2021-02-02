import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BranchesComponent } from './branches/branches.component';
import { ChapterContainerComponent } from './containers/chapter-container/chapter-container.component';
import { ListChaptersComponent } from './containers/list-chapters/list-chapters.component';
import { ChapterComponent } from './chapter/chapter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    BranchesComponent,
    ChapterContainerComponent,
    ListChaptersComponent,
    ChapterComponent,
  ],
  imports: [CommonModule, CourseRoutingModule, SharedModule],
})
export class CourseModule {}
