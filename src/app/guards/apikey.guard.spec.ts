import { TestBed } from '@angular/core/testing';

import { ApikeyGuard } from './apikey.guard';

describe('ApikeyGuard', () => {
  let guard: ApikeyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApikeyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
