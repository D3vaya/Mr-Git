import { Component, OnInit } from '@angular/core';
import { Configuration } from 'src/app/core/models/configuration.model';
import { environment } from 'src/environments/environment';
import { EditorUtilitiesService } from '../../../core/services/editor-utilities.service';
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
  constructor(private editor: EditorUtilitiesService) {
    this.visiblePreview = false;
    this.imageStatus = 'preview.svg';
    this.markdownWriter = '';
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
  setElement(type: string) {
    const txt = this.editor.getElement(type);
    this.markdownWriter += txt;
  }
}
