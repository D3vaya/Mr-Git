import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  @Output() scrollPosition: EventEmitter<number> = new EventEmitter<number>();

  private scrollEvent$;

  constructor(private el: ElementRef) {
    this.scrollEvent$ = fromEvent(this.el.nativeElement, 'scroll').subscribe(
      (e: any) => {
        this.scrollPosition.emit(e.target.scrollTop);
      }
    );
  }

  ngOnDestroy() {
    this.scrollEvent$.unsubscribe();
  }
}
