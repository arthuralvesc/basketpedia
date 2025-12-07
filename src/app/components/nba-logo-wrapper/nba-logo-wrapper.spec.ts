import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaLogoWrapper } from './nba-logo-wrapper';

describe('NbaLogoWrapper', () => {
  let component: NbaLogoWrapper;
  let fixture: ComponentFixture<NbaLogoWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaLogoWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaLogoWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
