import { TestBed } from '@angular/core/testing';

import { FavoriteCatsStateService } from './favorite-cats-state.service';

describe('FavoriteCatsStateService', () => {
  let service: FavoriteCatsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteCatsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
