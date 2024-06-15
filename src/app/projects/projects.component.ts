import { Component, Input } from '@angular/core';
import { Projects } from '../setups';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() projects!: Projects[];
  // Gets dark mode status from the parent component
  @Input() isDarkMode!: boolean;
}
