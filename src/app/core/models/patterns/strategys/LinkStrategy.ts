import { Strategy } from '../interfaces/Strategy';
export class LinkStrategy implements Strategy {
  execute(typeElement: string, subTypeElement: string): string {
    return '[Link]() ';
  }
}
