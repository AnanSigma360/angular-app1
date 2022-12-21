import { TestBed } from '@angular/core/testing';

import { App2ServiceService } from './app2-service.service';

describe('App2ServiceService', () => {
  let service: App2ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App2ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
