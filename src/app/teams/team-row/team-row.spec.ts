import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRow } from './team-row';

describe('TeamRow', () => {
  let component: TeamRow;
  let fixture: ComponentFixture<TeamRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
