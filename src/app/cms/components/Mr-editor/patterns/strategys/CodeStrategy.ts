import { format } from '../../../../../shared/utils/elements-markdown';
import { Strategy } from '../interfaces/Strategy';
export class CodeStrategy implements Strategy {
  private mapLenguages: Map<string, string>;

  constructor() {
    this.mapLenguages = this.initMapLenguages();
  }

  execute(lenguage: string): string {
    return (
      '\n```' + `${lenguage}\n` + `${this.mapLenguages.get(lenguage)}` + '\n```'
    );
  }

  private initMapLenguages(): Map<string, string> {
    const map = new Map();
    map.set(
      'python',
      'class Complex():\n def __saludo__(self, realpart, imagpart):\n hola = "mundo"'
    );
    map.set('bash', 'curl -O "url"');
    map.set('javascript', 'const isMrGit = true');
    map.set('markdown', '# Markdown');
    map.set('css', format.css);
    map.set('html', format.html);
    map.set('go', format.go);
    map.set('java', format.java);
    return map;
  }
}
