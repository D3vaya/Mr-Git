import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorUtilitiesService } from 'src/app/core/services/editor-utilities.service';
import { EditorSetup, ElementMode, OptionToolbar } from '../model/editor.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() options: OptionToolbar;
  @Input() editorSetup: EditorSetup;
  @Output() emitElementMode: EventEmitter<ElementMode>;
  @Output() emitCurrentMode: EventEmitter<string>;
  @Output() emitPreviewMode: EventEmitter<boolean>;

  public displayMenu = false;
  /**
   * arreglo de lenguajes de programación para setiar al editor
   */
  public codes: Array<{ code: string }>;
  /**
   * variable que controlara la vista previa de la escritura
   */
  public preview = {
    image: 'off.svg',
    status: true,
    description: 'Modo Previsualización',
  };

  constructor(private editorUtils: EditorUtilitiesService) {
    this.emitElementMode = new EventEmitter<ElementMode>();
    this.emitCurrentMode = new EventEmitter<string>();
    this.emitPreviewMode = new EventEmitter<boolean>(this.preview.status);
  }

  ngOnInit(): void {
    this.getCodeLenguage();
  }

  sendModeMetod(typeElementHtml: string, modifierElement: string) {
    const emit: ElementMode = { typeElementHtml, modifierElement };
    this.emitElementMode.emit(emit);

    if (typeElementHtml === 'code') {
      this.toggleLenguage();
    }
  }

  toggleLenguage(): void {
    this.displayMenu = !this.displayMenu;
  }

  getCodeLenguage(): void {
    this.codes = this.editorUtils.getLenguage();
  }
  changeModeEditor() {
    this.emitCurrentMode.emit(this.editorSetup.configuration.mode);
  }
  /**
   * Controla el estado de la vista previa
   */
  changeStatusPreview(): void {
    this.emitPreviewMode.emit(this.preview.status);
    this.preview.status = !this.preview.status;
    if (this.preview.status) {
      this.preview.image = 'off.svg';
    } else {
      this.preview.image = 'on.svg';
    }
  }
}
