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
  project: Projects | undefined;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectsService.getProjectById(id).subscribe(project => {
      this.project = project;
    });
  }

  goBack(): void {
    this.router.navigate(['/projects']);
  }
}
