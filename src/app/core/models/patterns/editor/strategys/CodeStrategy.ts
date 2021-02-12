import { Strategy } from '../interfaces/Strategy';
export class CodeStrategy implements Strategy {
  execute(modifierElement: string): string {
    return '\n``` \n const variable = "value"\n``` \n';
  }
}
