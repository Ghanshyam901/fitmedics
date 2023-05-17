import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctornavComponent } from './doctornav.component';

describe('DoctornavComponent', () => {
  let component: DoctornavComponent;
  let fixture: ComponentFixture<DoctornavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctornavComponent]
    });
    fixture = TestBed.createComponent(DoctornavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
