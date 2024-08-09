import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Projects } from '../setups';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  // Stores the project data and initialized as undefined
  project: Projects | undefined;

  // Injects activated route, projects service and router into the component
  constructor(private route: ActivatedRoute, private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
    /* Retrieves the project ID from the route parameters and fetches the project data using projects service
     * References:
     *    https://v17.angular.io/guide/router#route-parameters
     *    ChatGPT
     */
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Gets the selected project by its ID and fetches the project's details into the component when it initializes
    this.projectsService.getProjectById(id).subscribe(project => {
      this.project = project;
    });
  }
}
