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

  // Initializes search as a blank string and stores the user's input to use to filter results
  search: string = '';
  
  // When the user searches for a project, the projects displayed are stored in filteredData as an array 
  filteredData: Projects[] = [];

  /*
   * Initializes the filteredData array with all five projects to display initially
   * Reference: https://v17.angular.io/guide/lifecycle-hooks, https://v17.angular.io/api/core/OnInit
  */
  ngOnInit() {
    this.filteredData = this.projects;
  }

  /*
   * Filters the projects to display based on the user's input and updates the filteredData array accordingly
   * Reference: https://www.typescriptlang.org/docs/handbook/functions.html#rest-parameters
  */
  filterProjects(search: string) {
    this.filteredData = [];
    // Loops through all of the projects and checks if the user's input matches with any of the projects' titles
    for (let x of this.projects) {
      if (x.header.toLowerCase().includes(search.toLowerCase())) {
        /*
         * If a match is found, adds the project to the filteredData array
         * push method is what is used to add the project to the array
         * Reference: https://www.tutorialspoint.com/typescript/typescript_array_push.htm
        */
        this.filteredData.push(x);
      }
    }
    // If the user's input does not match any of the projects' titles, all projects remain displayed
    if (this.filteredData.length === 0) {
      this.filteredData = this.projects;
    }
  }
}
