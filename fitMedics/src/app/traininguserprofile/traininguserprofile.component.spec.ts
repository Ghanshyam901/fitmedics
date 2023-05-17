import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraininguserprofileComponent } from './traininguserprofile.component';

describe('TraininguserprofileComponent', () => {
  let component: TraininguserprofileComponent;
  let fixture: ComponentFixture<TraininguserprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraininguserprofileComponent]
    });
    fixture = TestBed.createComponent(TraininguserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
