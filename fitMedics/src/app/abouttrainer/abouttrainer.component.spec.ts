import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouttrainerComponent } from './abouttrainer.component';

describe('AbouttrainerComponent', () => {
  let component: AbouttrainerComponent;
  let fixture: ComponentFixture<AbouttrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbouttrainerComponent]
    });
    fixture = TestBed.createComponent(AbouttrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
