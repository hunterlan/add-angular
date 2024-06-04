import { TestBed } from '@angular/core/testing';

import { RetrainingService } from './retraining.service';

describe('RetrainingService', () => {
  let service: RetrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
