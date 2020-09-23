import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrimmOriginsComponent } from './grimm.origins.component';

describe('GrimmOriginsComponent', () => {
  let component: GrimmOriginsComponent;
  let fixture: ComponentFixture<GrimmOriginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrimmOriginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrimmOriginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
