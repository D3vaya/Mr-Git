import { Injectable } from '@angular/core';
import { chapters } from '../data/chapters';
import { Chapter } from '../models/chapter.model';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  getChapters(): Chapter[] {
    return chapters;
  }
  chapter() {}
}
