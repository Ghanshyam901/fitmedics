import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainernavComponent } from './trainernav.component';

describe('TrainernavComponent', () => {
  let component: TrainernavComponent;
  let fixture: ComponentFixture<TrainernavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainernavComponent]
    });
    fixture = TestBed.createComponent(TrainernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
