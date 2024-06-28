import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormappComponent } from '../kananboard/formapp/formapp.component';
import { TaskappComponent } from '../kananboard/taskapp/taskapp.component';
import { SectonTodoComponent } from '../kananboard/secton-todo/secton-todo.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormappComponent, TaskappComponent, SectonTodoComponent],
  imports: [CommonModule, CoreModule, FormsModule],
})
export class ShareModule {}
