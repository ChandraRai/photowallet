import { TestBed } from '@angular/core/testing';

import { CountryFlagService } from './country-flag.service';

describe('CountryFlagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryFlagService = TestBed.get(CountryFlagService);
    expect(service).toBeTruthy();
  });
});
