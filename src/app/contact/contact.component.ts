import { Component, Input } from '@angular/core';
import { Socials } from '../setups';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() socials!: Socials;
  @Input() isDarkMode!: boolean;
}
