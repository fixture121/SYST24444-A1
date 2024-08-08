// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Projects } from '../setups';
// import { ProjectsService } from '../projects.service';

// @Component({
//   selector: 'app-project-details',
//   templateUrl: './project-details.component.html',
//   styleUrls: ['./project-details.component.css'],
// })
// export class ProjectDetailsComponent implements OnInit {
//   project: Projects | undefined;
//   projectId: number | null = null;

//   constructor(
//     private route: ActivatedRoute,
//     private projectsService: ProjectsService
//   ) {}

//   ngOnInit() {
//     const projectId = +this.route.snapshot.paramMap.get('id')!;
//     this.projectId = projectId;
//     this.project = this.projectsService.getProjectById(projectId);

//     if (!this.project) {
//       console.error('Project ${id} not found');
//     }
//   }
// }
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

  // ngOnInit() {
  //   const projectId = Number(this.route.snapshot.paramMap.get('id'));
  //   if (projectId) {
  //     this.projectsService.getProjectById(projectId).subscribe(project => {
  //       this.project = project;
  //     });
  //   }

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
