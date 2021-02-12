import { Strategy } from '../interfaces/Strategy';
export class HeaderStrategy implements Strategy {
  execute(typeElement, subTypeElement): string {
    let exp = '#'.repeat(Number(subTypeElement));
    return exp + ' Titulo ';
  }
}
