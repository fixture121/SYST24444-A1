import { Component, Input } from '@angular/core';
import { Projects } from 'src/app/setups';
import { CardbuttonsService } from 'src/app/cardbuttons.service';

@Component({
  selector: 'app-stock-portfolio',
  templateUrl: './stock-portfolio.component.html',
  styleUrls: ['./stock-portfolio.component.css'],
})
export class StockPortfolioComponent {
  @Input() project!: Projects;
  @Input() isDarkMode!: boolean;

  constructor(private cardService: CardbuttonsService) {}

  like(elem: any) {
    this.cardService.likeCard(elem);
  }
}
