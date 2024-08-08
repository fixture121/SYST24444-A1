// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Projects } from '../app/setups';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProjectsService {
//   // private projects: Projects[] = [
//   //   { id: 1, header: 'Online Bookstore', subtitle: 'An e-commerce platform', description: 'Build a comprehensive online bookstore', image: ''},
//   //   { id: 2, header: 'Portfolio Website', subtitle: 'A personal portfolio site', description: 'Showcase your work and skills', image: ''},
//   //   { id: 3, header: 'War Game', subtitle: 'Strategy game', description: 'Develop a strategy-based war game', image: ''},
//   //   { id: 4, header: 'Stock Portfolio', subtitle: 'Manage stocks', description: 'Track and manage your stock investments', image: ''},
//   //   { id: 5, header: 'Todo List', subtitle: 'Task manager', description: 'Create a todo list application', image: ''}
//   // ];

//   private projectsUrl = 'assets/data/projects.json';

//   constructor(private http: HttpClient) { }

//   getProjects(): Observable<Projects[]> {
//     return this.http.get<Projects[]>(this.projectsUrl);
//   }

//   // getProjectById(id: number): Projects | undefined {
//   //   return this.projects.find(project => project.id === id);
//   // }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Projects } from '../app/setups';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsUrl = 'assets/data/projects.json';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Projects[]> {
    return this.http.get<{ projects: Projects[] }>(this.projectsUrl)
      .pipe(map(response => response.projects));
  }

  getProjectById(id: number): Observable<Projects | undefined> {
    return this.getProjects().pipe(
      map(projects => projects.find(project => project.id === id))
    );
  }
}
