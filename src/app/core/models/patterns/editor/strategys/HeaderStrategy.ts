import { Strategy } from '../interfaces/Strategy';
import { Format } from '../interfaces/Format';
export class HeaderStrategy implements Strategy {
  private format: Format = {
    block: true,
  };

  execute(modifierElement): string {
    let exp = '#'.repeat(Number(modifierElement));
    if (this.format.block) {
      return '\n' + exp + ' Titulo \n';
    }
  }
}
