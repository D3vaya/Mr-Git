import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypewriterComponent } from './containers/typewriter/typewriter.component';
import { BlogComponent } from './components/blog/blog.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SettingComponent } from './components/setting/setting.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommentsComponent } from './components/comments/comments.component';
import { MaintainersComponent } from './components/maintainers/maintainers.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'writing', component: TypewriterComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'maintainers', component: MaintainersComponent },
  { path: 'comments', component: CommentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {}
