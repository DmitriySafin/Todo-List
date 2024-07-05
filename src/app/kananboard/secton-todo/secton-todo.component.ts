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

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    const sectionSaved =
      (this.localStorageService.getItem('sections') as Section[]) || [];
    if (sectionSaved.length > 0) {
      this.sections.push(...sectionSaved);
    } else {
      const localSection: Section[] = [];
      // Перебираем все ключи перечисления TaskStatus
      Object.values(TaskStatus).forEach((status: TaskStatus) => {
        // Создаем новую секцию с задачами по ключу TaskStatus
        localSection.push({ title: status, tasks: [] });
      });
      this.localStorageService.setItem('sections', localSection);
    }
  }
  // Реализовать сохранение задачи в нужноую секцию в локальном хранилище
  saveTaskSection(task: Task) {
    console.log(task);

    // Находим нужную секцию по статусу задачи
    const section = this.sections.find(
      (section) => section.title === task.status
    );

    // Если секция с таким статусом найдена
    if (section) {
      // Проверяем, не содержится ли уже данная задача в найденной секции
      const taskIndex = section.tasks.findIndex((t) => t.id === task.id);
      if (taskIndex === -1) {
        // Добавляем задачу в найденную секцию
        section.tasks.push(task);
      } else {
        // Если такой id уже то это плохо вылетит в консоле
        console.log('Задача с таким id уже существует в данной секции.');
      }

      // this.deleteTaskFromSection(task.id);
      // Сохраняем обновленные секции в локальное хранилище
      this.localStorageService.setItem('sections', this.sections);
    }
  }

  deleteTaskFromSection(taskId: number) {
    this.sections.forEach((section) => {
      // Если задача с переданным id найдена в текущей секции, то выполняем следующее:
      const taskIndex = section.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        section.tasks.splice(taskIndex, 1); // Удаляем задачу из секции
      }
    });

    // Сохраняем обновленные секции в локальное хранилище
    this.localStorageService.setItem('sections', this.sections);
  }
}
