import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {
  @Input() height: number;
  imageHeight: string;
  constructor() {}

  ngOnInit(): void {
    if (!this.height) {
      this.height = 12;
      this.imageHeight = String((this.height * 80) / 10);
    } else {
      this.imageHeight = String((this.height * 80) / 10);
    }
  }
}
