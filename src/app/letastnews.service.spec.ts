import { TestBed } from '@angular/core/testing';

import { LetastnewsService } from './letastnews.service';

describe('LetastnewsService', () => {
  let service: LetastnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetastnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
