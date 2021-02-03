import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-title-chapter',
  templateUrl: './title-chapter.component.html',
  styleUrls: ['./title-chapter.component.scss'],
})
export class TitleChapterComponent implements OnInit {
  @Input() params: { image: string; title: string };
  constructor() {}

  ngOnInit(): void {}
}
