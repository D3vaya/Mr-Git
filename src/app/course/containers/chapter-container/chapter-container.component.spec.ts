import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterContainerComponent } from './chapter-container.component';

describe('ChapterContainerComponent', () => {
  let component: ChapterContainerComponent;
  let fixture: ComponentFixture<ChapterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
