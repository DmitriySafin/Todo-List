import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalStorageService } from '../../core/local-storage.service';

export interface Task {
  id: number;
  status: string;
  deadline: Date;
  description: string;
  taskNumber: string;
}

@Component({
  selector: 'app-taskapp',
  templateUrl: './taskapp.component.html',
  styleUrl: './taskapp.component.css',
  providers: [LocalStorageService],
})
export class TaskappComponent {
  @Input() task: Task | undefined;
  @Output() saveTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() editTask: EventEmitter<Task> = new EventEmitter<Task>();
  editingTaskDescription: string = ''; // Используем для хранения временного значения описания задачи
  isEditing: boolean = false;

  onDeleteTask() {
    if (this.task) {
      this.deleteTask.emit(this.task); // Отправляем объект задачи для удаления
    }
  }

  onEditOpenTask() {
    if (this.task) {
      this.editingTaskDescription = this.task.description; // Запоминаем текущее значение описания задачи
      this.isEditing = true;
    }
  }

  onCancelEdit() {
    this.isEditing = false;
  }

  onSaveEdit() {
    if (this.task) {
      this.task.description = this.editingTaskDescription; // Присваиваем временное значение обратно в задачу
      this.editTask.emit(this.task); // Отправляем измененную задачу на сохранение
      this.isEditing = false;
    }
  }
}
