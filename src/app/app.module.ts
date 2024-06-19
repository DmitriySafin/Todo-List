import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SectiontodoComponent } from './sectiontodo/sectiontodo.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [AppComponent, SectiontodoComponent, TaskComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent, SectiontodoComponent],
})
export class AppModule {}
