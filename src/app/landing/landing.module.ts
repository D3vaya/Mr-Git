import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { RoadmapComponent } from './roadmap/roadmap.component';

@NgModule({
  declarations: [HomeComponent, RoadmapComponent],
  imports: [CommonModule, LandingRoutingModule],
})
export class LandingModule {}
