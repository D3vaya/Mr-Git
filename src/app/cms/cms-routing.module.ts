import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypewriterComponent } from './containers/typewriter/typewriter.component';
const routes: Routes = [{ path: '', component: TypewriterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {}
