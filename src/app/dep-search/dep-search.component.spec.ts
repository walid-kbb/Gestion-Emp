import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepSearchComponent } from './dep-search.component';

describe('DepSearchComponent', () => {
  let component: DepSearchComponent;
  let fixture: ComponentFixture<DepSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
