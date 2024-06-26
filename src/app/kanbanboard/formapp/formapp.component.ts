import { Component } from '@angular/core';
import { LocalStorageService } from '../../core/local-storage.service';
import { count } from 'rxjs';

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
    const tasks = this.getItem('tasks') || [];
    const taskId = `${tasks.length + 1}`;
    const taskSection = 'MySection';
    const deadline = new Date();
    const count = taskId;

    // Создаем новую задачу с требуемыми ключами
    const newTask = {
      id: taskId,
      section: taskSection,
      description: this.taskDescription,
      taskNumber: `Todo ${tasks.length + 1}`,
      deadline: deadline,
      count: count,
    };

    tasks.push(newTask);
    this.setItem('tasks', tasks);
    this.taskDescription = '';
    this.closeForm();
  }
}
