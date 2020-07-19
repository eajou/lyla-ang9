import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrimmComponent } from './grimm.component';

describe('GrimmComponent', () => {
  let component: GrimmComponent;
  let fixture: ComponentFixture<GrimmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrimmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrimmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
