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

@NgModule({
  declarations: [
    EditorComponent,
    PreviewComponent,
    TypewriterComponent,
    SidebarComponent,
    ToolbarComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    CmsRoutingModule,
    MarkdownModule.forChild(),
  ],
})
export class CmsModule {}
