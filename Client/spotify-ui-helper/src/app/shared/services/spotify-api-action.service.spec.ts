import { TestBed } from '@angular/core/testing';

import { SpotifyApiActionService } from './spotify-api-action.service';

describe('SpotifyApiActionService', () => {
  let service: SpotifyApiActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyApiActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
