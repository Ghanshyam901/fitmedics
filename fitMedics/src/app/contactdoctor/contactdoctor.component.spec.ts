import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdoctorComponent } from './contactdoctor.component';

describe('ContactdoctorComponent', () => {
  let component: ContactdoctorComponent;
  let fixture: ComponentFixture<ContactdoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactdoctorComponent]
    });
    fixture = TestBed.createComponent(ContactdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
