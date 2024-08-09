import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../setups';
import { ProjectsService } from '../projects.service';
import { CardbuttonsService } from 'src/app/cardbuttons.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() projects!: Projects[];
  @Input() isDarkMode!: boolean;

  search: string = '';
  filteredData: Projects[] = [];
  /*
   * Set stores the IDs of the projects that the user liked
   * Reference: ChatGPT
   */
  likedProjects: Set<number> = new Set<number>();

  constructor(private cardService: CardbuttonsService, private projectsService: ProjectsService) {}

  // Loads in the projects data when component gets initialized
  ngOnInit() {
    this.loadProjects();
  }

  // Gets the list of projects from projects service and assigns it to projects and filteredData properties
  loadProjects() {
    this.projectsService.getProjects().subscribe((projects: Projects[]) => {
      this.projects = projects;
      this.filteredData = projects;
    });
  }

  filterProjects(search: string) {
    this.filteredData = this.projects.filter(project =>
      project.header.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 
  like(projectId: number) {
    // Toggles like status for the project using project ID in the likedProjects set
    if (this.likedProjects.has(projectId)) {
      // If the like button is already clicked for the project, remove it from likedProjects set
      this.likedProjects.delete(projectId);
    } else {
      // If the like button is not clicked for the project, add it to likedProjects set
      this.likedProjects.add(projectId);
    }
    // Calls likeCard method in cardService to update like status
    this.cardService.likeCard(projectId.toString());
  }

  // Checks if the project is liked using project ID in likedProjects set
  isLiked(projectId: number): boolean {
    return this.likedProjects.has(projectId);
  }
}
