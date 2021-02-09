import { Component, Input, OnInit } from '@angular/core';
import { RouteChapter } from 'src/app/core/models/chapter.model';

@Component({
  selector: 'app-chapter-not-found',
  templateUrl: './chapter-not-found.component.html',
  styleUrls: ['./chapter-not-found.component.scss'],
})
export class ChapterNotFoundComponent implements OnInit {
  @Input() params: RouteChapter;

  constructor() {}

  ngOnInit(): void {}
}
