import { TestBed } from '@angular/core/testing';

import { CompatibilityCheckerService } from './compatibility-checker.service';

describe('CompatibilityCheckerService', () => {
  let service: CompatibilityCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompatibilityCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
