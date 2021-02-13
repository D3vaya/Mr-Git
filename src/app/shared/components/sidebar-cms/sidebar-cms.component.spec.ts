import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCmsComponent } from './sidebar-cms.component';

describe('SidebarCmsComponent', () => {
  let component: SidebarCmsComponent;
  let fixture: ComponentFixture<SidebarCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
