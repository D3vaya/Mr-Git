import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditorUtilitiesService } from 'src/app/core/services/editor-utilities.service';
import { EditorSetup, ElementMode, OptionToolbar } from '../model/editor.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  public displayMenu = false;
  @Input() options: OptionToolbar;
  @Input() editorSetup: EditorSetup;
  @Output() emitElementMode: EventEmitter<ElementMode>;
  @Output() emitCurrentMode: EventEmitter<string>;

  /**
   * arreglo de lenguajes de programación para setiar al editor
   */
  public codes: Array<{ code: string }>;
  /**
   * variable que controlara la vista previa de la escritura
   */
  public preview = {
    image: 'on.svg',
    status: false,
  };

  constructor(private editorUtils: EditorUtilitiesService) {
    this.emitElementMode = new EventEmitter<ElementMode>();
    this.emitCurrentMode = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.getCodeLenguage();
  }

  sendModeMetod(typeElementHtml: string, modifierElement: string) {
    const emit: ElementMode = { typeElementHtml, modifierElement };
    this.emitElementMode.emit(emit);
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
    this.preview.status = !this.preview.status;
    if (this.preview.status) {
      this.preview.image = 'off.svg';
    } else {
      this.preview.image = 'on.svg';
    }
  }
}
