import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/core/models/link.model';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-list-chapters',
  templateUrl: './list-chapters.component.html',
  styleUrls: ['./list-chapters.component.scss'],
})
export class ListChaptersComponent implements OnInit {
  chapters: Array<Link>;
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getChapters();
  }

  getChapters() {
    this.chapters = this.coursesService.getChapters();
  }
}
