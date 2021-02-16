import { Strategy } from '../interfaces/Strategy';
export class ImageStrategy implements Strategy {
  execute(modifierElement: string): string {
    let element =
      '<img src="assets/static/images/caca.svg" height="70" loading="lazy" alt="caca" />';
    if (modifierElement === 'center') {
      element = `\n<center><img src="assets/static/images/pensando.svg" class="mb-4" loading="lazy" alt="logo git" height="70"/></center>\n`;
    }
    return element;
  }
}
