import { TestBed } from '@angular/core/testing';

import { MotificationService } from './motification.service';

describe('MotificationService', () => {
  let service: MotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
