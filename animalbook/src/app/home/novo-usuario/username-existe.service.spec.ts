import { TestBed } from '@angular/core/testing';

import { UsernameExisteService } from './username-existe.service';

describe('UsernameExisteService', () => {
  let service: UsernameExisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernameExisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
