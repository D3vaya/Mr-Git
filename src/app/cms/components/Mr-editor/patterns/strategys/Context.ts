import { Strategy } from '../interfaces/Strategy';
export class Context {
  private strategy: Strategy;

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(paramsStrategy: string) {
    return this.strategy.execute(paramsStrategy);
  }
}
