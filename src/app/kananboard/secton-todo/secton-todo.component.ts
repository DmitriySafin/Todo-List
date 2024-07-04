import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../taskapp/taskapp.component';
import { LocalStorageService } from '../../core/local-storage.service';

export enum TaskStatus {
  Idea = 'Idea',
  ToDo = 'To-Do',
  InProgress = 'In Progress',
  Done = 'Done',
}

export interface Section {
  title: TaskStatus;
  tasks: Task[];
}
@Component({
  selector: 'app-secton-todo',
  templateUrl: './secton-todo.component.html',
  styleUrls: ['./secton-todo.component.css'],
  providers: [LocalStorageService],
})
export class SectonTodoComponent implements OnInit {
  sections: Section[] = [];
  @Output() saveTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    // Перебираем все ключи перечисления TaskStatus
    Object.values(TaskStatus).forEach((status: TaskStatus) => {
      // Создаем новую секцию с задачами по ключу TaskStatus
      const tasksForStatus =
        (this.localStorageService.getItem(status) as Task[]) || [];
      this.sections.push({
        title: status,
        tasks: tasksForStatus,
      });
      this.localStorageService.setItem('sections', this.sections);
    });
  }
  // Реализовать сохранение задачи в нужноую секцию в локальном хранилище
  saveTaskSection(task: Task) {
    // Находим нужную секцию по статусу задачи
    const section = this.sections.find(
      (section) => section.title === task.status
    );

    // Если секция с таким статусом найдена
    if (section) {
      // Добавляем задачу в найденную секцию
      section.tasks.push(task);

      // Сохраняем обновленные секции в локальное хранилище
      this.localStorageService.setItem('sections', this.sections);

      // Генерируем событие сохранения задачи
      this.saveTask.emit(task);
    }
  }
  // Метод  для добавления задачи в указанную секцию:
  // addTaskInSection(task: Task) {
  //   // Находим нужную секцию по статусу задачи
  //   const section = this.sections.find((sec) => sec.title === task.status);

  //   if (section) {
  //     const newTask: Task = {
  //       id: task.id,
  //       status: task.status,
  //       deadline: task.deadline,
  //       description: task.description,
  //       taskNumber: task.taskNumber,
  //     };

  //     section.tasks.push(newTask);

  //     // Сохраняем обновленные секции в локальное хранилище
  //     this.localStorageService.setItem('sections', this.sections);
  //   }
  // }
}
