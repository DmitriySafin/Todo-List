import { Component } from '@angular/core';
import { FormappComponent } from '../formapp/formapp.component';

export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: Date;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent extends FormappComponent implements Task {
  id: number;
  title: string;
  description: string;
  deadline: Date;

  constructor() {
    super();
    this.id = 0;
    this.title = '';
    this.description = '';
    this.deadline = new Date();
  }
  renderTask() {
    const list = document.querySelector('task__list');
  }
}
