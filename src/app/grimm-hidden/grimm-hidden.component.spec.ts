import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrimmHiddenComponent } from './grimm-hidden.component';

describe('GrimmHiddenComponent', () => {
  let component: GrimmHiddenComponent;
  let fixture: ComponentFixture<GrimmHiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrimmHiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrimmHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
