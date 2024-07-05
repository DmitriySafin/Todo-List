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
  @Input() task: Task | undefined; // получает
  @Output() saveTask: EventEmitter<Task> = new EventEmitter<Task>(); // отдаёт
  @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();

  onDeleteTask() {
    if (this.task && this.task.id) {
      this.deleteTask.emit(this.task.id); // Отправляем id задачи для удаления из локального хранилища
    } else {
      console.log('Задача не была добавлена на страницу, нечего удалять.');
    }
  }
}
