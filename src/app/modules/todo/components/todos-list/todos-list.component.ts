import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from '@apps/shared/models/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.sass']
})
export class TodosListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'title', 'content', 'completed', 'action'];

  @Input() todos:Todos[] = [];
  @Input() cols:any[] = [];

  @Output() deleteTodoById = new EventEmitter();
  @Output() routeTodoById = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * delete single todo from firebase using child to parent emit
   * @param id
   */
  public deleteTodo(id:string):void{
    this.deleteTodoById.emit(id)
  };
 
  /**
   * delete single todo from firebase using child to parent emit
   * @param id
   */
  public routeTodoDetail(id:string):void{
    this.routeTodoById.emit(id)
  };

}
