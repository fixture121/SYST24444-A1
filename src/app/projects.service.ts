import { Injectable } from '@angular/core';
import { Projects } from '../app/setups';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Projects[] = [
    { id: 1, header: 'Online Bookstore', subtitle: 'An e-commerce platform', description: 'Build a comprehensive online bookstore', image: ''},
    { id: 2, header: 'Portfolio Website', subtitle: 'A personal portfolio site', description: 'Showcase your work and skills', image: ''},
    { id: 3, header: 'War Game', subtitle: 'Strategy game', description: 'Develop a strategy-based war game', image: ''},
    { id: 4, header: 'Stock Portfolio', subtitle: 'Manage stocks', description: 'Track and manage your stock investments', image: ''},
    { id: 5, header: 'Todo List', subtitle: 'Task manager', description: 'Create a todo list application', image: ''}
  ];

  //constructor() { }

  getProjectById(id: number): Projects | undefined {
    return this.projects.find(project => project.id === id);
  }
}
