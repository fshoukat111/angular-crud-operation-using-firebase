import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoModule, UsersModule } from '@apps/modules';



const SHARED_MODULES = [
  CommonModule,
  TodoModule,
  UsersModule,
];


@NgModule({
  declarations: [],
  imports: [...SHARED_MODULES],
  exports:[...SHARED_MODULES]
})
export class SharedModule { }
