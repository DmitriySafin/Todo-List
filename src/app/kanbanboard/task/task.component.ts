import { Component } from '@angular/core';
import { FormappComponent } from '../formapp/formapp.component';

export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  status: TaskStatus;
}

export enum TaskStatus {
  Idea = 'Idea',
  ToDo = 'To-Do',
  InProgress = 'In Progress',
  Done = 'Done',
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
  status: TaskStatus;

  constructor() {
    super();
    this.id = 0;
    this.title = '';
    this.description = '';
    this.deadline = new Date();
    this.status = TaskStatus.Idea;
  }
}
