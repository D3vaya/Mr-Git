import { Strategy } from '../interfaces/Strategy';
export class ListStrategy implements Strategy {
  execute(typeElement: string, subTypeElement: string): string {
    return `- Lista
    * item 1
    * item 2
    - Sublista
      * subitem 1
      * subitem 2`;
  }
}
