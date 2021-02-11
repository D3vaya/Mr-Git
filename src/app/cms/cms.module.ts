import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { EditorComponent } from './components/editor/editor.component';
import { PreviewComponent } from './components/preview/preview.component';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { TypewriterComponent } from './containers/typewriter/typewriter.component';

@NgModule({
  declarations: [EditorComponent, PreviewComponent, TypewriterComponent],
  imports: [
    FormsModule,
    CommonModule,
    MarkdownModule.forChild(),
    CmsRoutingModule,
  ],
})
export class CmsModule {}
