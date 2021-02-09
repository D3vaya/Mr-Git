import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-title-chapter',
  templateUrl: './title-chapter.component.html',
  styleUrls: ['./title-chapter.component.scss'],
})
export class TitleChapterComponent implements OnInit {
  @Input() params: { image: string; title: string };

  constructor() {}

  ngOnInit(): void {
    console.log(this.params);
  }
}
