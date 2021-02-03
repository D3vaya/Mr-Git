import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from 'src/app/core/models/chapter.model';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit {
  @Input() chapter: Chapter;

  constructor() {}

  ngOnInit(): void {}
}
