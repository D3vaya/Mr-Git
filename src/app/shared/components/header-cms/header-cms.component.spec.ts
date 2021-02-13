import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCmsComponent } from './header-cms.component';

describe('HeaderCmsComponent', () => {
  let component: HeaderCmsComponent;
  let fixture: ComponentFixture<HeaderCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
