import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage1Component } from './homepage1.component';

describe('Homepage1Component', () => {
  let component: Homepage1Component;
  let fixture: ComponentFixture<Homepage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Homepage1Component]
    });
    fixture = TestBed.createComponent(Homepage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
