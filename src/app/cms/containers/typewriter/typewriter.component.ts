import { Component, OnInit } from '@angular/core';
// Strategies
import { Context } from 'src/app/core/models/patterns/strategys/Context';
import { Strategy } from 'src/app/core/models/patterns/interfaces/Strategy';
import { environment } from 'src/environments/environment';
import { CodeStrategy } from 'src/app/core/models/patterns/strategys/CodeStrategy';
import { LinkStrategy } from 'src/app/core/models/patterns/strategys/LinkStrategy';
import { ListStrategy } from 'src/app/core/models/patterns/strategys/ListStrategy';
import { Configuration } from 'src/app/core/models/configuration.model';
import { TableStrategy } from 'src/app/core/models/patterns/strategys/TableStrategy';
import { ImageStrategy } from 'src/app/core/models/patterns/strategys/ImageStrategy';
import { HeaderStrategy } from 'src/app/core/models/patterns/strategys/HeaderStrategy';
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

  constructor() {
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
  copyElement(typeHtmlElment: string, subTypeHtmlElement: string) {
    this.context.setStrategy(this.arrayStrategy.get(typeHtmlElment));
    const txt = this.context.executeStrategy(
      typeHtmlElment,
      subTypeHtmlElement
    );
    this.markdownWriter += txt;
  }
  copyElementCustom(type: string) {
    this.markdownWriter += '\n---\n';
  }
}
