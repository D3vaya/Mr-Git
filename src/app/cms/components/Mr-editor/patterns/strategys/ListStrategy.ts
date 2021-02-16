import { Format } from '../interfaces/Format';
import { Strategy } from '../interfaces/Strategy';
export class ListStrategy implements Strategy {
  private format: Format = {
    block: true,
  };
  execute(modifierElement: string): string {
    if (this.format.block) {
      return `\n\n - Lista
    - item 1
    - item 2
    - Sublista
      - subitem 1
      - subitem 2`;
    }
  }
}
