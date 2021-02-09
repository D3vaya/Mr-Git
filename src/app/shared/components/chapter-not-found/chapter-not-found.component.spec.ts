import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterNotFoundComponent } from './chapter-not-found.component';

describe('ChapterNotFoundComponent', () => {
  let component: ChapterNotFoundComponent;
  let fixture: ComponentFixture<ChapterNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
