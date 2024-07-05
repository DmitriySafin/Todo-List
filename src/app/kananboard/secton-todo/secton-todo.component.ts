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
  taskCount: number;
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
        localSection.push({ title: status, tasks: [], taskCount: 0 });
      });
      this.localStorageService.setItem('sections', localSection);
    }
  }
  // Реализовать сохранение задачи в нужноую секцию в локальном хранилище
  saveTaskSection(task: Task) {
    const section = this.sections.find(
      (section) => section.title === task.status
    );

    if (section) {
      const taskIndex = section.tasks.findIndex((t) => t.id === task.id);
      if (taskIndex === -1) {
        section.tasks.push(task);
      } else {
        console.log('Задача с таким id уже существует в данной секции.');
      }

      this.updateTaskCount();
      // Не вызывайте deleteTaskFromSection здесь
      this.localStorageService.setItem('sections', this.sections);
    }
  }
  deleteTaskFromSection(taskId: Task) {
    // Находим первую секцию, в которой существует задача с переданным id
    const section = this.sections.find((section) =>
      section.tasks.some((task) => task.id === taskId.id)
    );

    if (section) {
      const taskIndex = section.tasks.findIndex(
        (task) => task.id === taskId.id
      );

      if (taskIndex !== -1) {
        section.tasks.splice(taskIndex, 1); // Удаляем задачу из найденной секции
        this.updateTaskCount();
        this.localStorageService.setItem('sections', this.sections); // Сохраняем обновленные секции в локальное хранилище
      }
    }
  }
  editTaskInSection(task: Task) {
    const section = this.sections.find((sec) => sec.title === task.status);

    if (section) {
      const taskIndex = section.tasks.findIndex((t) => t.id === task.id);

      if (taskIndex !== -1) {
        section.tasks[taskIndex] = { ...task }; // Обновление задачи в секции
        this.updateTaskCount(); // Обновление общего количества задач в разделе
        this.localStorageService.setItem('sections', this.sections); // Сохранение изменений в локальном хранилище
      }
    }
  }
  updateTaskCount() {
    this.sections.forEach((section) => {
      section.taskCount = section.tasks.length;
    });
    // Сохраняем обновленные секции в локальное хранилище
    this.localStorageService.setItem('sections', this.sections);
  }
}
