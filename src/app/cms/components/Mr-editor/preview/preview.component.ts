import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  @Input() data: string;

  constructor() {}

  ngOnInit(): void {}

  onLoad(event: any) {
    console.log(event);
  }
  onError(event: any) {
    console.log(event);
  }
}
