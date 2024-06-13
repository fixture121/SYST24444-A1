import { Component, Input } from '@angular/core';
import { Footer } from '../setups';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() footer!: Footer;
  @Input() isDarkMode!: boolean;
}
