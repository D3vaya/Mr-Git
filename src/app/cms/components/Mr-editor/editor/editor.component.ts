import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorSetup, ElementMode } from '../model/editor.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  @Input() setup: EditorSetup;
  @Input() markdownEditor: string;
  @Output() currentMarkdown: EventEmitter<string>;
  @Output() editorModeMethodEmitter: EventEmitter<ElementMode>;
  @Output() emitChangeEditorMode: EventEmitter<string>;

  constructor() {
    this.currentMarkdown = new EventEmitter<string>();
    this.editorModeMethodEmitter = new EventEmitter<ElementMode>();
    this.emitChangeEditorMode = new EventEmitter<string>();
  }
  ngOnInit(): void {}
  setModeMetod(emitterMode: ElementMode) {
    this.editorModeMethodEmitter.emit(emitterMode);
  }

  writingMarkdown($event) {
    this.currentMarkdown.emit(this.markdownEditor);
  }
  changeEditorMode(currentEditorMode: string) {
    this.emitChangeEditorMode.emit(currentEditorMode);
  }
  changePrevieMode() {}
}
