import { Component, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from '../../core/local-storage.service';
import { Task, TaskappComponent } from '../taskapp/taskapp.component';

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

  constructor(private localStorageService: LocalStorageService) {}

  showForm(): void {
    this.showTaskForm = true;
  }

  closeForm() {
    this.showTaskForm = false;
  }

  prepearTask() {
    // По заполненым подям формы создать объект Task
    const tasks = this.localStorageService.getItem('sections');
    console.log(tasks);

    const newTask = {
      id: tasks.tasks.length + 1,
      status: tasks.title,
      deadline: new Date(),
      description: this.taskDescription,
      taskNumber: `Todo ${tasks.tasks.length + 1}`,
    };

    // И передать в SaveTask  this.saveTask.emit(созданный объект Task)
    this.saveTask.emit(newTask);
    // Очистка поля с описанием задачи
    this.taskDescription = '';

    // Закрытие формы после сохранения задачи
    this.closeForm();
    //
  }
}
