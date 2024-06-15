import { Component, Input } from '@angular/core';
import { Projects } from 'src/app/setups';

@Component({
  selector: 'app-war-game',
  templateUrl: './war-game.component.html',
  styleUrls: ['./war-game.component.css'],
})
export class WarGameComponent {
  @Input() project!: Projects;
  @Input() isDarkMode!: boolean;
}
