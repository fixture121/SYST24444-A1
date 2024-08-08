import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from '../setups';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  project: Projects | undefined;
  projectId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    const projectId = +this.route.snapshot.paramMap.get('id')!;
    this.projectId = projectId;
    this.project = this.projectsService.getProjectById(projectId);

    if (!this.project) {
      console.error('Project ${id} not found');
    }
  }
}
