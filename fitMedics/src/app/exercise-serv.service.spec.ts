import { TestBed } from '@angular/core/testing';

import { ExerciseServService } from './exercise-serv.service';

describe('ExerciseServService', () => {
  let service: ExerciseServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
