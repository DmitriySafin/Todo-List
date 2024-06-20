import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SectiontodoComponent } from './kanbanboard/sectiontodo/sectiontodo.component';
import { KanbanboardModule } from './kanbanboard/kanbanboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, KanbanboardModule],
  providers: [],
  bootstrap: [AppComponent, SectiontodoComponent],
})
export class AppModule {}
