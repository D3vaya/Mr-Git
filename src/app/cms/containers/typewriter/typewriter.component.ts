import { Component, OnInit } from '@angular/core';
import { Configuration } from 'src/app/core/models/configuration.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss'],
})
export class TypewriterComponent implements OnInit {
  public markdownWriter: string;
  visiblePreview: boolean;
  imageStatus: string;
  config: Configuration = environment.configuration;
  constructor() {
    this.visiblePreview = false;
    this.imageStatus = 'preview.svg';
  }

  ngOnInit(): void {}

  changeStatusPreview() {
    this.visiblePreview = !this.visiblePreview;
    if (this.visiblePreview) {
      this.imageStatus = 'no-preview.svg';
    } else {
      this.imageStatus = 'preview.svg';
    }
  }
}
