import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
}
