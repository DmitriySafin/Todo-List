import { Component } from '@angular/core';
import { LocalStorageService } from '../../core/local-storage.service';

interface FormAppInterface {
  showTaskForm: boolean;
  taskDescription: string;
  task: object;
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
    };

    const tasks = this.getItem('tasks') || [];
    tasks.push(this.task);
    this.setItem('tasks', tasks);

    this.taskDescription = '';
    this.closeForm();
  }
}
