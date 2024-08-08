import { Component, Input } from '@angular/core';
import { Projects } from 'src/app/setups';
import { CardbuttonsService } from 'src/app/cardbuttons.service';

@Component({
  selector: 'app-online-bookstore',
  templateUrl: './online-bookstore.component.html',
  styleUrls: ['./online-bookstore.component.css'],
})
export class OnlineBookstoreComponent {
  @Input() project!: Projects;
  @Input() isDarkMode!: boolean;

  constructor(private cardService: CardbuttonsService) {}

  like(elem: any) {
    this.cardService.likeCard(elem);
  }
}
