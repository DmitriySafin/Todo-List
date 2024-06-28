import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Task {
  id: number;
  status: any;
  deadline: Date;
  description: string;
  taskNumber: string;
}

@Component({
  selector: 'app-taskapp',
  templateUrl: './taskapp.component.html',
  styleUrl: './taskapp.component.css',
})
export class TaskappComponent {
  @Input() task: Task | undefined;
  @Output() saveTask: EventEmitter<Task> = new EventEmitter<Task>();
}
