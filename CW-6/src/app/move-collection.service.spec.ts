import { TestBed } from '@angular/core/testing';

import { MoveCollectionService } from './move-collection.service';

describe('MoveCollectionService', () => {
  let service: MoveCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
