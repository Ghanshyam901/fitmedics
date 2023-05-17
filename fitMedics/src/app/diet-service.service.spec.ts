import { TestBed } from '@angular/core/testing';

import { DietServiceService } from './diet-service.service';

describe('DietServiceService', () => {
  let service: DietServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
