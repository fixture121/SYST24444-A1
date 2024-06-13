import { Component, Input } from '@angular/core';
import { Projects } from 'src/app/setups';

@Component({
  selector: 'app-portfolio-website',
  templateUrl: './portfolio-website.component.html',
  styleUrls: ['./portfolio-website.component.css'],
})
export class PortfolioWebsiteComponent {
  @Input() project!: Projects;
  @Input() isDarkMode!: boolean;
}
