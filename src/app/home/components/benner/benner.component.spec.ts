import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BennerComponent } from './benner.component';

describe('BennerComponent', () => {
  let component: BennerComponent;
  let fixture: ComponentFixture<BennerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BennerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BennerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
