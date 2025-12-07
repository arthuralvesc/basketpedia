import { Component } from '@angular/core';
import { MenuGrid } from './menu-grid/menu-grid';

@Component({
  selector: 'app-home',
  imports: [MenuGrid],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
