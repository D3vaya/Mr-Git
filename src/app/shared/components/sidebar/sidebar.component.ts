import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/core/models/chapter.model';

import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  chapters: Chapter[];
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getChapters();
  }

  getChapters() {
    this.chapters = this.coursesService.getChapters();
  }
}
