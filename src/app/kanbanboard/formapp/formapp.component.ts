import { Component } from '@angular/core';
import { LocalStorageService } from '../../core/local-storage.service';
import { TaskStatus } from '../task/task.component';

interface FormAppInterface {
  showTaskForm: boolean;
  taskDescription: string;
  task: object;
  taskStatus: TaskStatus;
}

@Component({
  selector: 'app-formapp',
  templateUrl: './formapp.component.html',
  styleUrls: ['./formapp.component.css'],
})
export class FormappComponent
  extends LocalStorageService
  implements FormAppInterface
{
  taskStatus: TaskStatus = TaskStatus.ToDo;
  showTaskForm: boolean = false;
  taskDescription: string = '';
  task: object = {};

  showForm(): void {
    this.showTaskForm = true;
  }

  closeForm() {
    this.showTaskForm = false;
  }

  closeFormEscp(evt: KeyboardEvent): void {
    if (evt.key === 'Escape') {
      this.closeForm();
    }
  }

  addTask(): void {
    this.task = {
      description: this.taskDescription,
      status: this.taskStatus,
    };

    const tasks = this.getItem('tasks') || [];
    tasks.push(this.task);
    this.setItem('tasks', tasks);

    this.taskDescription = '';
    this.showTaskForm = false;
  }
}
