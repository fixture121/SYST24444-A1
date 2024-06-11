import { Component, Input } from '@angular/core';
import { Personal } from '../setups';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

// sname gets read by header.component.html and uses the name entered in this component to display it
export class HeaderComponent {
  @Input() personal!: Personal;
}
