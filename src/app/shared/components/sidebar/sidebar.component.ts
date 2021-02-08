import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chapter } from 'src/app/core/models/chapter.model';

import { CoursesService } from 'src/app/core/services/courses.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  chapters: Chapter[];
  stat$: Observable<boolean>;
  classSidebar = 'none';
  constructor(
    private coursesService: CoursesService,
    private utilService: UtilsService
  ) {}

  ngOnInit(): void {
    this.getChapters();
    this.stat$ = this.utilService.getStatusSidebar$();
    this.stat$.subscribe((status) => {
      console.log(status);
      if (status) {
        this.classSidebar = 'block';
      } else {
        this.classSidebar = 'none';
      }
    });
  }

  getChapters() {
    this.chapters = this.coursesService.getChapters();
  }
  showSidebar(event) {
    if (event) {
      this.classSidebar = 'block';
    } else {
      this.classSidebar = 'none';
    }
    console.log(event);
  }
}
