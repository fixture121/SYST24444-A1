import { Component, Input } from '@angular/core';
import { Personal } from '../setups';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  @Input() personal!: Personal;
  @Input() isDarkMode!: boolean;
}
