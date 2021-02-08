import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LinkComponent } from './components/link/link.component';
import { NavCoursesComponent } from './components/nav-courses/nav-courses.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrandComponent } from './components/brand/brand.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CodeComponent } from './components/code/code.component';
import { MarkdownModule } from 'ngx-markdown';
import { ChapterNotFoundComponent } from './chapter-not-found/chapter-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LinkComponent,
    NavCoursesComponent,
    SidebarComponent,
    BrandComponent,
    PageNotFoundComponent,
    CodeComponent,
    ChapterNotFoundComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LinkComponent,
    NavCoursesComponent,
    SidebarComponent,
    BrandComponent,
    PageNotFoundComponent,
    CodeComponent,
    ChapterNotFoundComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, MarkdownModule.forChild()],
})
export class SharedModule {}
