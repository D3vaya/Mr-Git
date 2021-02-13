import { Component, OnInit } from '@angular/core';

import { Context } from '../../components/Mr-editor/patterns/strategys/Context';
import { Strategy } from '../../components/Mr-editor/patterns/interfaces/Strategy';
import { CodeStrategy } from '../../components/Mr-editor/patterns/strategys/CodeStrategy';
import { LinkStrategy } from '../../components/Mr-editor/patterns/strategys/LinkStrategy';
import { ListStrategy } from '../../components/Mr-editor/patterns/strategys/ListStrategy';
import { TableStrategy } from '../../components/Mr-editor/patterns/strategys/TableStrategy';
import { ImageStrategy } from '../../components/Mr-editor/patterns/strategys/ImageStrategy';
import { HeaderStrategy } from '../../components/Mr-editor/patterns/strategys/HeaderStrategy';
import { RulesStrategy } from '../../components/Mr-editor/patterns/strategys/RulesStrategy';

import { EditorUtilitiesService } from '../../../core/services/editor-utilities.service';
import {
  EditorSetup,
  EditorMode,
  ElementMode,
} from '../../components/Mr-editor/model/editor.model';
@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss'],
})
export class TypewriterComponent implements OnInit {
  /**
   * variable que soportara el markdown para entregarlo al componente
   */
  public markdownWriter: string = '';
  /**
   * arreglo de lenguajes de programación para setiar al editor
   */
  public codes: Array<{ code: string }>;

  /**
   * configuración basica del textarea
   */

  public setup: EditorSetup = {
    markdownWriter: 'string',
    configuration: {
      mode: EditorMode.Selection,
      imageMode: 'selection.svg',
      title: 'Selección',
      description: 'Aparecera el elemento al hacer click',
      language: 'es',
      spellcheck: true,
      autoComplete: 'off',
    },
  };
  public displayMenu = false;
  /**
   * clase contexto que controla la ejexucion de las estrategias
   */
  private context = new Context();
  /**
   * Arreglo con todas las estrategias de implementación
   */
  mapStrategy: Map<string, Strategy>;

  constructor(private editorUtils: EditorUtilitiesService) {
    this.initStrategies();
  }

  ngOnInit(): void {
    this.getCodeLenguage();
  }

  receptMardown(markdownEmitter: string) {
    this.markdownWriter = markdownEmitter;
  }

  /**
   * inicializa el arreglo de estrategias para el contexto
   */
  initStrategies(): void {
    this.mapStrategy = new Map();
    this.mapStrategy.set('img', new ImageStrategy());
    this.mapStrategy.set('code', new CodeStrategy());
    this.mapStrategy.set('table', new TableStrategy());
    this.mapStrategy.set('head', new HeaderStrategy());
    this.mapStrategy.set('link', new LinkStrategy());
    this.mapStrategy.set('list', new ListStrategy());
    this.mapStrategy.set('rules', new RulesStrategy());
  }

  changeModeEditor(currentModeEditor): void {
    if (currentModeEditor === EditorMode.Selection) {
      this.setup.configuration.imageMode = 'copypaste.svg';
      this.setup.configuration.mode = EditorMode.CopyPaste;
      this.setup.configuration.title = 'Copy/Paste';
      this.setup.configuration.description = 'Presione y pegue';
    } else {
      this.setup.configuration.imageMode = 'selection.svg';
      this.setup.configuration.mode = EditorMode.Selection;
      this.setup.configuration.title = 'Selección';
      this.setup.configuration.description =
        'Aparecera el elemento al hacer click';
    }
  }

  getCodeLenguage(): void {
    this.codes = this.editorUtils.getLenguage();
  }

  setModeMetod(receptEmitter: ElementMode): void {
    if (this.setup.configuration.mode === EditorMode.CopyPaste) {
      this.copyPasteMode(
        receptEmitter.typeElementHtml,
        receptEmitter.modifierElement
      );
    } else {
      this.selectionMode(
        receptEmitter.typeElementHtml,
        receptEmitter.modifierElement
      );
    }
    if (receptEmitter.typeElementHtml === 'code') {
      this.toggleLenguage();
    }
  }

  toggleLenguage(): void {
    this.displayMenu = !this.displayMenu;
  }

  private selectionMode(typeHtmlElment: string, modifierElement: string): void {
    const txt = this.getStrategyContext(typeHtmlElment, modifierElement);
    this.markdownWriter += txt;
  }
  private copyPasteMode(typeHtmlElment: string, modifierElement): void {
    const txt = this.getStrategyContext(typeHtmlElment, modifierElement);
    const textareatTmp = document.createElement('textarea');
    textareatTmp.style.position = 'fixed';
    textareatTmp.style.left = '0';
    textareatTmp.style.top = '0';
    textareatTmp.style.opacity = '0';
    textareatTmp.value = txt;
    document.body.appendChild(textareatTmp);
    textareatTmp.focus();
    textareatTmp.select();
    document.execCommand('copy');
    document.body.removeChild(textareatTmp);
  }

  private getStrategyContext(strategyKey: string, modifierElement: string) {
    this.context.setStrategy(this.mapStrategy.get(strategyKey));
    return this.context.executeStrategy(modifierElement);
  }
}
