import { TestBed } from '@angular/core/testing';

import { TrainerServiceService } from './trainer-service.service';

describe('TrainerServiceService', () => {
  let service: TrainerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
