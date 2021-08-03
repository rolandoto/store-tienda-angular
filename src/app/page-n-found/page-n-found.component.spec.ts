import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNFoundComponent } from './page-n-found.component';

describe('PageNFoundComponent', () => {
  let component: PageNFoundComponent;
  let fixture: ComponentFixture<PageNFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
