import { Component, Input } from '@angular/core';
import { Projects } from 'src/app/setups';
import { CardbuttonsService } from 'src/app/cardbuttons.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() project!: Projects;
  @Input() isDarkMode!: boolean;

  constructor(private cardService: CardbuttonsService) {}

  like(elem: any) {
    this.cardService.likeCard(elem);
  }
}
