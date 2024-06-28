import { Component, EventEmitter, Output, output } from '@angular/core';
import { LocalStorageService } from '../../core/local-storage.service';
import { Task } from '../taskapp/taskapp.component';

interface FormAppInterface {
  showTaskForm: boolean;
  taskDescription: string;
  task: object;
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
  task: object = {};
  constructor(private localStorageService: LocalStorageService) {}
  showForm(): void {
    this.showTaskForm = true;
  }

  closeForm() {
    this.showTaskForm = false;
  }
}
