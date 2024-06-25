import { Component } from '@angular/core';
import { LocalStorageService } from '../../core/local-storage.service';

export enum TaskStatus {
  Idea = 'Idea',
  ToDo = 'To-Do',
  InProgress = 'In Progress',
  Done = 'Done',
}

@Component({
  selector: 'app-section-todo',
  templateUrl: './sectiontodo.component.html',
  styleUrls: ['./sectiontodo.component.css'],
})
export class SectiontodoComponent extends LocalStorageService {
  TaskStatus = TaskStatus;
  ideaCount: number = 0;
  toDoCount: number = 0;
  inProgressCount: number = 0;
  doneCount: number = 0;

  addTask(status: TaskStatus) {
    switch (status) {
      case TaskStatus.Idea:
        this.getItem;
        break;
      case TaskStatus.ToDo:
        this.toDoCount++;
        break;
      case TaskStatus.InProgress:
        this.inProgressCount++;
        break;
      case TaskStatus.Done:
        this.doneCount++;
        break;
    }
  }
}
