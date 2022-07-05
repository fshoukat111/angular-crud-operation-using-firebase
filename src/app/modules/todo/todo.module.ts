import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from '@apps/modules/todo/todo.component';
import { CreateNewTodoComponent, TodosListComponent } from '@apps/modules/todo/components';
import { MaterialUiModule } from '@apps/shared/modules';
import { TodoDetailComponent } from '@apps/modules/todo/pages';
import { EditTodoComponent } from './pages/edit-todo/edit-todo.component';



@NgModule({
  declarations: [
    TodoComponent,
    CreateNewTodoComponent,
    TodosListComponent,
    TodoDetailComponent,
    EditTodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    MaterialUiModule
  ],
  exports: [ReactiveFormsModule]
})
export class TodoModule { }
