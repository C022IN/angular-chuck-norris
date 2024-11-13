import { TestBed } from '@angular/core/testing';

import { ColorsStateService } from './colors-state.service';

describe('ColorsStateService', () => {
  let service: ColorsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
