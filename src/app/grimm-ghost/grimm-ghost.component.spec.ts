import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrimmGhostComponent } from './grimm-ghost.component';

describe('GrimmGhostComponent', () => {
  let component: GrimmGhostComponent;
  let fixture: ComponentFixture<GrimmGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrimmGhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrimmGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
