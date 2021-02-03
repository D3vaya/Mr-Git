import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleChapterComponent } from './title-chapter.component';

describe('TitleChapterComponent', () => {
  let component: TitleChapterComponent;
  let fixture: ComponentFixture<TitleChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
