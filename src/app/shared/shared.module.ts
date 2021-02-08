import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LinkComponent } from './components/link/link.component';
import { NavCoursesComponent } from './components/nav-courses/nav-courses.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MarkdownModule } from 'ngx-markdown';
import { ChapterNotFoundComponent } from './chapter-not-found/chapter-not-found.component';
@NgModule({
  declarations: [
    LinkComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavCoursesComponent,
    PageNotFoundComponent,
    ChapterNotFoundComponent,
  ],
  exports: [
    LinkComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavCoursesComponent,
    PageNotFoundComponent,
    ChapterNotFoundComponent,
  ],
  imports: [CommonModule, MarkdownModule.forChild()],
})
export class SharedModule {}
