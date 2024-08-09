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
