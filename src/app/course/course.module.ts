import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { ChapterContainerComponent } from './containers/chapter-container/chapter-container.component';
import { ListChaptersComponent } from './containers/list-chapters/list-chapters.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { SharedModule } from '../shared/shared.module';
import { CoverPageComponent } from './components/cover-page/cover-page.component';
import { TitleChapterComponent } from './components/title-chapter/title-chapter.component';
import { ContentChapterComponent } from './components/content-chapter/content-chapter.component';
import { HighlightModule } from 'ngx-highlightjs';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    ChapterContainerComponent,
    ListChaptersComponent,
    ChapterComponent,
    CoverPageComponent,
    TitleChapterComponent,
    ContentChapterComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
    HighlightModule,
    MarkdownModule.forChild(),
  ],
})
export class CourseModule {}
