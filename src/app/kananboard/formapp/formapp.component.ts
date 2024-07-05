import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalStorageService } from '../../core/local-storage.service';
import { Task } from '../taskapp/taskapp.component';
import { Section } from '../secton-todo/secton-todo.component';

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
  @Input() section: Section | undefined;
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
    const newTask: Task = {
      id: (this.section?.tasks.length || 0) + 1, // изменение в этой строке
      status: this.section?.title || '',
      deadline: new Date(),
      description: this.taskDescription,
      taskNumber: `Task ${(this.section?.tasks.length || 0) + 1}`, // также изменяем здесь
    };
    console.log(this.section?.tasks.length);

    this.saveTask.emit(newTask);

    // Очищаем поле с описанием задачи
    this.taskDescription = '';

    // Закрываем форму после сохранения задачи
    this.closeForm();
  }
}
//
