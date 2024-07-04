import { Component, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from '../../core/local-storage.service';
import { Task } from '../taskapp/taskapp.component';

interface FormAppInterface {
  showTaskForm: boolean;
  taskDescription: string;
}

@Component({
  selector: 'app-formapp',
  templateUrl: './formapp.component.html',
  styleUrls: ['./formapp.component.css'],
  providers: [LocalStorageService],
})
export class FormappComponent implements FormAppInterface {
  @Output() saveTask: EventEmitter<Task> = new EventEmitter<Task>();
  showTaskForm: boolean = false;
  taskDescription: string = '';
  newTask: Task | undefined;
  constructor(private localStorageService: LocalStorageService) {}

  showForm(): void {
    this.showTaskForm = true;
  }

  closeForm() {
    this.showTaskForm = false;
  }

  prepearTask() {
    const sections = this.localStorageService.getItem('sections') || [];

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];

      const newTask: Task = {
        id: section.tasks.length + 1,
        status: section.title,
        deadline: new Date(),
        description: this.taskDescription,
        taskNumber: `Task ${section.tasks.length + 1}`,
      };

      section.tasks.push(newTask);
      this.saveTask.emit(newTask);
      // Обновляем секцию в массиве
      sections[i] = section;
    }

    // Обновляем список секций в локальном хранилище
    this.localStorageService.setItem('sections', sections);

    // Очищаем поле с описанием задачи
    this.taskDescription = '';

    // Закрываем форму после сохранения задачи
    this.closeForm();
  }
}
//
