import { TestBed } from '@angular/core/testing';

import { UpatedlogService } from './upatedlog.service';

describe('UpatedlogService', () => {
  let service: UpatedlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpatedlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
