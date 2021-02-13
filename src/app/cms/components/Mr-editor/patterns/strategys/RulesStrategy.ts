import { Strategy } from '../interfaces/Strategy';
export class RulesStrategy implements Strategy {
  execute(modifierElement): string {
    return '\n\n***\n';
  }
}
