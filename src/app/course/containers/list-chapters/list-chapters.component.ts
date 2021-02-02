import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/core/models/chapter.model';
import { Link } from 'src/app/core/models/link.model';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-list-chapters',
  templateUrl: './list-chapters.component.html',
  styleUrls: ['./list-chapters.component.scss'],
})
export class ListChaptersComponent implements OnInit {
  chapters: Chapter[];
  link: Link;
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getChapters();
  }

  getChapters() {
    this.chapters = this.coursesService.getChapters();
  }
}
