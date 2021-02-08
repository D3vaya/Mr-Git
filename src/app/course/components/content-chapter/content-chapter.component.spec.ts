import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChapterComponent } from './content-chapter.component';

describe('ContentChapterComponent', () => {
  let component: ContentChapterComponent;
  let fixture: ComponentFixture<ContentChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
