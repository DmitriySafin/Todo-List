import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectiontodoComponent } from './sectiontodo/sectiontodo.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [SectiontodoComponent, TaskComponent],
  imports: [CommonModule],
})
export class KanbanboardModule {}
