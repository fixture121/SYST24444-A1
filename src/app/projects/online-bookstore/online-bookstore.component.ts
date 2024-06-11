import { Component, Input } from '@angular/core';
import { Projects } from 'src/app/setups';

@Component({
  selector: 'app-online-bookstore',
  templateUrl: './online-bookstore.component.html',
  styleUrls: ['./online-bookstore.component.css'],
})
export class OnlineBookstoreComponent {
  @Input() project!: Projects;
}
