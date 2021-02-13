import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { EditorComponent } from './components/Mr-editor/editor/editor.component';
import { CmsRoutingModule } from './cms-routing.module';
import { PreviewComponent } from './components/Mr-editor/preview/preview.component';
import { MarkdownModule } from 'ngx-markdown';
import { TypewriterComponent } from './containers/typewriter/typewriter.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/Mr-editor/toolbar/toolbar.component';
import { BlogComponent } from './components/blog/blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SettingComponent } from './components/setting/setting.component';
import { MaintainersComponent } from './components/maintainers/maintainers.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    EditorComponent,
    PreviewComponent,
    TypewriterComponent,
    SidebarComponent,
    ToolbarComponent,
    BlogComponent,
    DashboardComponent,
    CoursesComponent,
    SettingComponent,
    MaintainersComponent,
    CommentsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    CmsRoutingModule,
    MarkdownModule.forChild(),
  ],
})
export class CmsModule {}
