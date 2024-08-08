import { Component, Input } from '@angular/core';
import { Projects } from 'src/app/setups';
import { CardbuttonsService } from 'src/app/cardbuttons.service';

@Component({
  selector: 'app-portfolio-website',
  templateUrl: './portfolio-website.component.html',
  styleUrls: ['./portfolio-website.component.css'],
})
export class PortfolioWebsiteComponent {
  @Input() project!: Projects;
  @Input() isDarkMode!: boolean;

  constructor(private cardService: CardbuttonsService) {}

  like(elem: any) {
    this.cardService.likeCard(elem);
  }
}
