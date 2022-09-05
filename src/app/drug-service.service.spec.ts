import { TestBed } from '@angular/core/testing';

import { DrugServiceService } from './drug-service.service';

describe('DrugServiceService', () => {
  let service: DrugServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
