import { TestBed, inject } from '@angular/core/testing';

import { TwitchApiCallsService } from './twitch-api-calls.service';

describe('TwitchApiCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitchApiCallsService]
    });
  });

  it('should be created', inject([TwitchApiCallsService], (service: TwitchApiCallsService) => {
    expect(service).toBeTruthy();
  }));
});
