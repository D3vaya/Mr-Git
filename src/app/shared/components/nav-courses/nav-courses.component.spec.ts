import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCoursesComponent } from './nav-courses.component';

describe('NavCoursesComponent', () => {
  let component: NavCoursesComponent;
  let fixture: ComponentFixture<NavCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
