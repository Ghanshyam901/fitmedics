import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacttrainerComponent } from './contacttrainer.component';

describe('ContacttrainerComponent', () => {
  let component: ContacttrainerComponent;
  let fixture: ComponentFixture<ContacttrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContacttrainerComponent]
    });
    fixture = TestBed.createComponent(ContacttrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
