import { Strategy } from '../interfaces/Strategy';
export class LinkStrategy implements Strategy {
  execute(modifierElement: string): string {
    return '[Link]() ';
  }
}
