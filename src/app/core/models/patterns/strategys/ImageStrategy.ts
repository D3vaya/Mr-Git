import { Strategy } from '../interfaces/Strategy';
export class ImageStrategy implements Strategy {
  execute(typeElement: string, subTypeElement: string): string {
    let element = '<img src="assets/static/images/" height="" alt="" />';
    if (subTypeElement === 'center') {
      element = `\n<center><img src="assets/static/images/" height="" alt="" /></center>\n`;
    }
    return element;
  }
}
