import { Component, Input } from '@angular/core';
import { Projects } from 'src/app/setups';

@Component({
  selector: 'app-stock-portfolio',
  templateUrl: './stock-portfolio.component.html',
  styleUrls: ['./stock-portfolio.component.css'],
})
export class StockPortfolioComponent {
  @Input() project!: Projects;
  @Input() isDarkMode!: boolean;
}
