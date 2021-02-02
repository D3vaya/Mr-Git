import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesLayoutComponent } from './courses-layout.component';

describe('CoursesLayoutComponent', () => {
  let component: CoursesLayoutComponent;
  let fixture: ComponentFixture<CoursesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
