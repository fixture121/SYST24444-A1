import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Projects } from '../app/setups';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // URL for JSON file
  private projectsUrl = 'assets/data/projects.json';

  constructor(private http: HttpClient) { }

  /* Gets the projects from JSON file and maps them to the projects array
   * References:
   *    https://stackoverflow.com/questions/44042223/load-json-content-from-a-local-file-with-http-get-in-angular-2
   *    ChatGPT
   */
  getProjects(): Observable<Projects[]> {
    return this.http.get<{ projects: Projects[] }>(this.projectsUrl)
      .pipe(map(response => response.projects));
  }

  /* Gets the specific project using projct ID and maps the matching projct to it
   * References:
   *    https://stackoverflow.com/questions/44042223/load-json-content-from-a-local-file-with-http-get-in-angular-2
   *    ChatGPT
   */
  getProjectById(id: number): Observable<Projects | undefined> {
    return this.getProjects().pipe(
      map(projects => projects.find(project => project.id === id))
    );
  }
}
