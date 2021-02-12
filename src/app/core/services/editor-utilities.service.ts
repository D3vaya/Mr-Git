import { Injectable } from '@angular/core';
import { format } from 'src/app/shared/utils/elements-markdown';
enum Headers {
  H1 = '1',
  H2 = '2',
  H3 = '3',
  H4 = '4',
  H5 = '5',
  H6 = '6',
}
enum TypeElementMarkDown {
  Image = 'img',
  ImageCenter = 'imgc',
  Link = 'link',
  Code = 'code',
  Table = 'table',
}

@Injectable({
  providedIn: 'root',
})
export class EditorUtilitiesService {
  constructor() {}

  getElement(typeElement: string): string {
    if (typeElement === TypeElementMarkDown.Code) {
      return this.setTemplateCode();
    }
    if (typeElement === TypeElementMarkDown.Link) {
      return this.setTemplateLink();
    }
    if (
      typeElement === TypeElementMarkDown.Image ||
      typeElement === TypeElementMarkDown.ImageCenter
    ) {
      return this.setTemplateImage(typeElement);
    }
    if (typeElement === TypeElementMarkDown.Table) {
      return this.setTemplateTable();
    }

    return this.setTemplateHeader(typeElement);
  }

  private setTemplateImage(type) {
    let element = '<img src="" height="" alt="" />';
    if (type == TypeElementMarkDown.ImageCenter) {
      element = `<center><img src="" height="" alt="" /></center>`;
    }
    return element;
  }
  private setTemplateCode() {
    return '```javascript\n``` \n';
  }
  private setTemplateLink() {
    return '[Link]()';
  }
  private setTemplateTable() {
    return format.table;
  }
  private setTemplateHeader(type: string) {
    const split = type.split('_');
    let exp = '#'.repeat(Number(split[1]));
    return exp + ' Titulo \n';
  }
}
