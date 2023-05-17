import { TestBed } from '@angular/core/testing';

import { ExcerciseServiceService } from './excercise-service.service';

describe('ExcerciseServiceService', () => {
  let service: ExcerciseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcerciseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
