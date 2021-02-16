import { Strategy } from '../interfaces/Strategy';
import { format } from '../../../../../shared/utils/elements-markdown';
export class TableStrategy implements Strategy {
  execute(modifierElement: string): string {
    return format.table;
  }
}
