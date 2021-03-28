import { TestBed } from '@angular/core/testing';

import { OfflineGuard } from './offline.guard';

describe('OfflineGuard', () => {
  let guard: OfflineGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OfflineGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
