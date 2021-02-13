import { Injectable } from '@angular/core';
import { lenguage } from '../data/lenguages';
@Injectable({
  providedIn: 'root',
})
export class EditorUtilitiesService {
  constructor() {}

  getLenguage() {
    return lenguage;
  }
}
