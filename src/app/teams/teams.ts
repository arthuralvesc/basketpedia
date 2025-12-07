// src/app/teams/teams.ts

import { Component } from '@angular/core';
import { TeamsService } from './services/teams.service';
import { CommonModule } from '@angular/common';
import { TeamRow } from './team-row/team-row';
import { Observable } from 'rxjs'; // Importante

@Component({
  selector: 'app-teams',
  imports: [CommonModule, TeamRow], 
  templateUrl: './teams.html',
  styleUrl: './teams.scss'
})
export class Teams {
  teams$: Observable<any>;
  showNoTeamsFoundMessage: any;
  
  constructor(private teamsService: TeamsService){
    this.teams$ = this.teamsService.fetchTeams();
    console.log(this.teams$)
  }
}