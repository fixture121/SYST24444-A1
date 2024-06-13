import { Component, Input } from '@angular/core';
import { Projects } from 'src/app/setups';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() project!: Projects;
  @Input() isDarkMode!: boolean;
}
