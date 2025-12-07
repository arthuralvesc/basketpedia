import { TestBed } from '@angular/core/testing';

import { TeamDetail } from './team-detail';

describe('TeamDetail', () => {
  let service: TeamDetail;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamDetail);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
