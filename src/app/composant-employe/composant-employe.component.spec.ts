import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantEmployeComponent } from './composant-employe.component';

describe('ComposantEmployeComponent', () => {
  let component: ComposantEmployeComponent;
  let fixture: ComponentFixture<ComposantEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposantEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
