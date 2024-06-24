import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectiontodoComponent } from './sectiontodo/sectiontodo.component';
import { TaskComponent } from './task/task.component';
import { FormappComponent } from './formapp/formapp.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SectiontodoComponent, TaskComponent, FormappComponent],
  imports: [CommonModule, FormsModule, BrowserModule],
})
export class KanbanboardModule {}
