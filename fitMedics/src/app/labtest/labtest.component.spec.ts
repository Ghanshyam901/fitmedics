import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestComponent } from './labtest.component';

describe('LabtestComponent', () => {
  let component: LabtestComponent;
  let fixture: ComponentFixture<LabtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabtestComponent]
    });
    fixture = TestBed.createComponent(LabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
