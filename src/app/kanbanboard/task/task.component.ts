import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../core/local-storage.service';

export interface Task {
  count: string;
  deadline: Date;
  description: string;
  id: string;
  section: string;
  taskNumber: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent extends LocalStorageService implements OnInit {
  tasks: Task[] = [];

  ngOnInit() {
    this.renderTasks();
  }

  renderTasks() {
    this.tasks = this.getItem('tasks') || [];
  }

  // removeTask(taskId: string) {
  //   const updatedTasks = this.tasks.filter((task: Task) => task.id !== taskId);
  //   this.setItem('tasks', updatedTasks);
  //   this.tasks = updatedTasks;
  // }

  // addTask(newTask: Task) {
  //   this.tasks.push(newTask);
  //   this.setItem('tasks', this.tasks);
  // }
}
