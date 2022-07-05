import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, first } from 'rxjs';
import { Todos } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(public fireStore: AngularFirestore) { }

  // Fetch Todos List
  getTodosList() {
    return this.fireStore.collection('todo_db').snapshotChanges().pipe(
      map((snaps) =>
        snaps.map((snap) => {
          return {
            id: snap.payload.doc.id,
            ...(snap.payload.doc.data() as {}),
          };
        })
      ),
      first()
    );
  }

   // Fetch Todo By Id 
   getTodoById(id:any) {
    return this.fireStore.doc('todo_db/' + id);
  }

  // Add Todos 
  addTodo(todo: Todos) {
    return this.fireStore.collection('todo_db').add(todo);
  }

  // Update Todos 
  updateTodo(id:any,todo: Todos) {
    return this.fireStore.doc('todo_db/' + id).update(todo);
  }

  // Update Todos 
  deleteTodo(id: string) {
    return this.fireStore.doc('todo_db/' + id).delete();
  }

}
