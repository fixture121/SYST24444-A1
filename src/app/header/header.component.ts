import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

// sname gets read by header.component.html and uses the name entered in this component to display it
export class HeaderComponent {
  sname = 'Toufiq Charania';
}
