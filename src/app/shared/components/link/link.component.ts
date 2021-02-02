import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from 'src/app/core/models/chapter.model';
import { Link } from 'src/app/core/models/link.model';
enum stateMenu {
  Off = 'flechaderecha.svg',
  On = 'flechaabajo.svg',
}
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() params: Chapter;
  constructor() {}
  img: string;

  ngOnInit(): void {
    this.img = stateMenu.Off;
  }

  open() {
    this.params.open = !this.params.open;
    this.changeStatusImg();
  }
  changeStatusImg() {
    if (this.img == stateMenu.Off) {
      this.img = stateMenu.On;
    } else {
      this.img = stateMenu.Off;
    }
  }
}
