// src/app/services/teams.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  http = inject(HttpClient);
  teamsJsonUrl = 'assets/data/teams.json';

  fetchTeams(): Observable<any> {
    return this.http.get<any>(this.teamsJsonUrl)
  }
}