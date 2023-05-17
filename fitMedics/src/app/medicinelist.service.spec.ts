import { TestBed } from '@angular/core/testing';

import { MedicinelistService } from './medicinelist.service';

describe('MedicinelistService', () => {
  let service: MedicinelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicinelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
