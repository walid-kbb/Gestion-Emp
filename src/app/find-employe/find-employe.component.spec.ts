import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEmployeComponent } from './find-employe.component';

describe('FindEmployeComponent', () => {
  let component: FindEmployeComponent;
  let fixture: ComponentFixture<FindEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
