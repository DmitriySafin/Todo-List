import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';
import { SectonTodoComponent } from './kananboard/secton-todo/secton-todo.component';
import { FormappComponent } from './kananboard/formapp/formapp.component';
import { TaskappComponent } from './kananboard/taskapp/taskapp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormappComponent,
    TaskappComponent,
    SectonTodoComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ShareModule,
    FormsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
