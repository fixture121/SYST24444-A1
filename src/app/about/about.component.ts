import { Component, Input } from '@angular/core';
import { Personal, About } from '../setups';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() personal!: Personal;
  @Input() about!: About;
}
