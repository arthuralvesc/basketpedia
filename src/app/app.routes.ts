import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Teams } from './teams/teams';
import { TeamDetail } from './teams/team-detail/team-detail';
import { Login } from './login/login';

export const routes: Routes = [
    { 
        path: '',
        component: Login
    },
    {
        path: 'teams',
        component: Teams
    },
    {
        path: 'teams/:id',
        component: TeamDetail
    }
];
