import { Component } from '@angular/core';
import { FormappComponent } from '../formapp/formapp.component';
import { LocalStorageService } from '../../core/local-storage.service';

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
export class TaskComponent extends LocalStorageService implements Task {
  tasks: Task[] = [];
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
  ngOnInit() {
    this.renderTasks();
  }
  renderTasks() {
    this.tasks = this.getItem('tasks');
    console.log(this.tasks);

    this.tasks.map((task) => {
      const deadline = new Date(task.deadline);
      const day = deadline.getDate();
      const month = deadline.getMonth() + 1;
      const year = deadline.getFullYear();
      const formattedDeadline = `${day} ${month} ${year}`;

      // Добавляем новые ключи к объекту задачи
      // const updatedTask = {
      //   ...this.tasks,
      //   deadline: formattedDeadline,
      //   this.id: 'значение1',
      //   newKey2: 'значение2',
      // };

      // return updatedTask;
    });
  }
}
