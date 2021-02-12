import { Strategy } from '../interfaces/Strategy';
import { formatTable } from '../../../../../shared/utils/elements-markdown';
export class TableStrategy implements Strategy {
  execute(modifierElement: string): string {
    return formatTable.table;
  }
}
