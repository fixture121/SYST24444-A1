import { Component, Input } from '@angular/core';
import { Projects } from 'src/app/setups';
import { CardbuttonsService } from 'src/app/cardbuttons.service';

@Component({
  selector: 'app-war-game',
  templateUrl: './war-game.component.html',
  styleUrls: ['./war-game.component.css'],
})
export class WarGameComponent {
  @Input() project!: Projects;
  @Input() isDarkMode!: boolean;

  constructor(private cardService: CardbuttonsService) {}

  like(elem: any) {
    this.cardService.likeCard(elem);
  }
}
