import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoInputComponent, TodoItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
