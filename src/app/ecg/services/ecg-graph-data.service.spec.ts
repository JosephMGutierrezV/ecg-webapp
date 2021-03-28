import { TestBed } from '@angular/core/testing';

import { EcgGraphDataService } from './ecg-graph-data.service';

describe('EcgGraphDataService', () => {
  let service: EcgGraphDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcgGraphDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
