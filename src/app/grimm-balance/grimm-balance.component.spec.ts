import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrimmBalanceComponent } from './grimm-balance.component';

describe('GrimmBalanceComponent', () => {
  let component: GrimmBalanceComponent;
  let fixture: ComponentFixture<GrimmBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrimmBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrimmBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
