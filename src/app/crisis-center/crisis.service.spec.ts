import { TestBed } from '@angular/core/testing';

import { crisisService } from './crisis.service';

describe('crisisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: crisisService = TestBed.get(crisisService);
    expect(service).toBeTruthy();
  });
});
