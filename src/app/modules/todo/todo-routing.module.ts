import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from '@apps/modules/todo/todo.component';
import { EditTodoComponent, TodoDetailComponent } from '@apps/modules/todo/pages';

const routes: Routes = [
  {
    path: '',component:TodoComponent
  },
  {
    path: 'edit/:id',component:TodoComponent
  },
  {
    path: ':id',component:TodoDetailComponent
  },
  // {
  //   path: 'edit/:id',component:EditTodoComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
