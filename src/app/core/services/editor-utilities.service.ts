import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditorUtilitiesService {
  constructor() {}

  setTemplateLink() {
    return '[Link]()';
  }
}
