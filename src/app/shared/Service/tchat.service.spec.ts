import { TestBed } from '@angular/core/testing';

import { TchatService } from './tchat.service';

describe('TchatService', () => {
  let service: TchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
