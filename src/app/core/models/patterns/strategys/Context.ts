import { Strategy } from '../interfaces/Strategy';
export class Context {
  private strategy: Strategy;

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(typeHtmlElment: string, subTypeElement: string) {
    console.log(`Strategy ${typeHtmlElment} subItem ${subTypeElement}`);
    return this.strategy.execute(typeHtmlElment, subTypeElement);
  }
}
