import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  statusSidebar$: Subject<boolean> = new Subject<boolean>();
  constructor() {}

  getStatusSidebar$(): Observable<boolean> {
    return this.statusSidebar$.asObservable();
  }

  sendStatusSidebar(status: boolean) {
    this.statusSidebar$.next(status);
  }
}
