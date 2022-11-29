import { TestBed } from '@angular/core/testing';

import { GynaService } from './gyna.service';

describe('GynaService', () => {
  let service: GynaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GynaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
