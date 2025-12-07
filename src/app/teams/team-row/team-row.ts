import { Component, Input } from '@angular/core';
import { Team } from '../models/team.model';
import { NbaLogoDynamicWrapperComponent } from '../../components/nba-logo-wrapper/nba-logo-wrapper';


@Component({
  selector: 'app-team-row',
  imports: [NbaLogoDynamicWrapperComponent],
  templateUrl: './team-row.html',
  styleUrl: './team-row.scss'
})
export class TeamRow {
  @Input() team!: Team;

  goToTeamDetail(event: Event){
    console.log(event);
  }
}
