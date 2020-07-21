import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrimmBloodComponent } from './grimm-blood.component';

describe('GrimmBloodComponent', () => {
  let component: GrimmBloodComponent;
  let fixture: ComponentFixture<GrimmBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrimmBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrimmBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
