import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LinkComponent } from './components/link/link.component';
import { NavCoursesComponent } from './components/nav-courses/nav-courses.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MarkdownModule } from 'ngx-markdown';
import { ChapterNotFoundComponent } from './components/chapter-not-found/chapter-not-found.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { ThanksComponent } from './thanks/thanks.component';
@NgModule({
  declarations: [
    LinkComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoadingComponent,
    NavCoursesComponent,
    PageNotFoundComponent,
    ChapterNotFoundComponent,
    ThanksComponent,
  ],
  exports: [
    LinkComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    SidebarComponent,
    NavCoursesComponent,
    PageNotFoundComponent,
    ChapterNotFoundComponent,
  ],
  imports: [CommonModule, MarkdownModule.forChild(), RouterModule],
})
export class SharedModule {}
