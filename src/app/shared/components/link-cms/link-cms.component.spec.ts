import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCmsComponent } from './link-cms.component';

describe('LinkCmsComponent', () => {
  let component: LinkCmsComponent;
  let fixture: ComponentFixture<LinkCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
