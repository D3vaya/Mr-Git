import { Component, OnInit } from '@angular/core';
// Strategies
import { Context } from 'src/app/core/models/patterns/editor/strategys/Context';
import { Strategy } from 'src/app/core/models/patterns/editor/interfaces/Strategy';
import { environment } from 'src/environments/environment';
import { CodeStrategy } from 'src/app/core/models/patterns/editor/strategys/CodeStrategy';
import { LinkStrategy } from 'src/app/core/models/patterns/editor/strategys/LinkStrategy';
import { ListStrategy } from 'src/app/core/models/patterns/editor/strategys/ListStrategy';
import { Configuration } from 'src/app/core/models/configuration.model';
import { TableStrategy } from 'src/app/core/models/patterns/editor/strategys/TableStrategy';
import { ImageStrategy } from 'src/app/core/models/patterns/editor/strategys/ImageStrategy';
import { HeaderStrategy } from 'src/app/core/models/patterns/editor/strategys/HeaderStrategy';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss'],
})
export class TypewriterComponent implements OnInit {
  /**
   * variable que soportara el markdown para entregarlo al componente
   */
  public markdownWriter: string;

  /**
   * variable que controlara la vista previa de la escritura
   */
  preview = {
    image: 'preview.svg',
    status: false,
  };
  /**
   * configuración basica del textarea
   */
  config: Configuration = environment.configuration;
  /**
   * clase contexto que controla la ejexucion de las estrategias
   */
  context = new Context();
  /**
   * Arreglo con todas las estrategias de implementación
   */
  arrayStrategy: Map<string, Strategy>;

  constructor(private md: MarkdownService) {
    this.markdownWriter = '';
    this.initStrategies();
  }

  /**
   * inicializa el arreglo de estrategias para el contexto
   */
  initStrategies() {
    this.arrayStrategy = new Map();
    this.arrayStrategy.set('img', new ImageStrategy());
    this.arrayStrategy.set('code', new CodeStrategy());
    this.arrayStrategy.set('table', new TableStrategy());
    this.arrayStrategy.set('head', new HeaderStrategy());
    this.arrayStrategy.set('link', new LinkStrategy());
    this.arrayStrategy.set('list', new ListStrategy());
  }

  ngOnInit(): void {}

  /**
   * Controla el estado de la vista previa
   */
  changeStatusPreview() {
    this.preview.status = !this.preview.status;
    if (this.preview.status) {
      this.preview.image = 'no-preview.svg';
    } else {
      this.preview.image = 'preview.svg';
    }
  }

  /**
   * metodo que ejecuta las estrategias dependiendo de  la acción de la vista
   */
  copyElement(typeHtmlElment: string, modifierElement: string) {
    this.context.setStrategy(this.arrayStrategy.get(typeHtmlElment));
    const txt = this.context.executeStrategy(modifierElement);
    this.markdownWriter += txt;
  }
  copyElementCustom(type: string) {
    this.markdownWriter += '\n---\n';
  }
  tabText(e) {
    console.log(this.md.compile(this.markdownWriter));
    if (e.which === 9) {
      e.preventDefault();
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;
      console.log(start, '-', end);
      let val = this.markdownWriter;
      this.markdownWriter = val.substring(0, start) + '\t' + val.substring(end);
    }
  }
}
