import { TestBed } from '@angular/core/testing';

import { RateTechnicianService } from './rate-technician.service';

describe('RateTechnicianService', () => {
  let service: RateTechnicianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RateTechnicianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
