import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Link } from '../../../core/models/link.model';
@Component({
  selector: 'app-nav-courses',
  templateUrl: './nav-courses.component.html',
  styleUrls: ['./nav-courses.component.scss'],
})
export class NavCoursesComponent implements OnInit {
  chapters: Array<Link>;
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.initChapters();
  }

  initChapters() {
    this.chapters = this.coursesService.getChapters();
    console.log(this.chapters);
  }
}
