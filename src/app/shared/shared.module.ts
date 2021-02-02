import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LinkComponent } from './components/link/link.component';
import { NavCoursesComponent } from './components/nav-courses/nav-courses.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LinkComponent,
    NavCoursesComponent,
    SidebarComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LinkComponent,
    NavCoursesComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
