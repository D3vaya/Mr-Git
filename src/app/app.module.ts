import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CoursesLayoutComponent } from './layouts/courses-layout/courses-layout.component';
// import {
//   HighlightModule,
//   HighlightOptions,
//   HIGHLIGHT_OPTIONS,
// } from 'ngx-highlightjs';
@NgModule({
  declarations: [AppComponent, PublicLayoutComponent, CoursesLayoutComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [
    // {
    //   provide: HIGHLIGHT_OPTIONS,
    //   useValue: <HighlightOptions>{
    //     lineNumbers: true,
    //     coreLibraryLoader: () => import('highlight.js/lib/core'),
    //     lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
    //     languages: {
    //       bash: () => import('highlight.js/lib/languages/bash'),
    //     },
    //   },
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
