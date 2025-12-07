import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-grid',
  imports: [],
  templateUrl: './menu-grid.html',
  styleUrl: './menu-grid.scss'
})
export class MenuGrid {
  constructor (private router: Router) {}

   goToTeamsPage() {
    this.router.navigate(['/teams'])
  }
}
