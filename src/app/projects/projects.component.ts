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
  likedProjects: Set<number> = new Set<number>();

  constructor(private cardService: CardbuttonsService, private projectsService: ProjectsService) {}

  ngOnInit() {
    this.loadProjects();
  }

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

  like(projectId: number) {
    if (this.likedProjects.has(projectId)) {
      this.likedProjects.delete(projectId);
    } else {
      this.likedProjects.add(projectId);
    }
    this.cardService.likeCard(projectId.toString());
  }

  isLiked(projectId: number): boolean {
    return this.likedProjects.has(projectId);
  }
}
