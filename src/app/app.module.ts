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

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ShareModule, CoreModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent, SectonTodoComponent],
})
export class AppModule {}
