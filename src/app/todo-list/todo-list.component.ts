import { Component, OnInit } from '@angular/core';
// import { TodoListService } from '../todo-list.service';
import { TodoListItem } from '../todo-list-item/todo-list-item';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs'

export interface Todo {
    title: string;
    desc: string;
    isDone: boolean;
    fsID: string;
}

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  taskCreatorIsVisible: boolean = false;
  taskTitle: string = "";
  taskDescription: string = "";
  private todosCollection: AngularFirestoreCollection<Todo>;
  todos: Observable<Todo[]>;

  constructor(private db: AngularFirestore) {
      this.todosCollection = db.collection<Todo>('gang-todo');
      this.todos = this.todosCollection.valueChanges({idField: "fsID"});
      console.log(this.todos)
  }

  addItem() {
    const id = this.db.createId();
    const item: Todo = { 
      title: this.taskTitle, 
      desc: this.taskDescription, 
      isDone: false, 
      fsID: id 
    }

    this.todosCollection.doc(id).set(item);
    this.taskCreatorIsVisible = false;
  }

  onDoneChanged(updatedObj) {
    const id = updatedObj.fsID;
    const doneField = { isDone: updatedObj.isDone }
    this.todosCollection.doc(id).update(doneField)
  }
 
  showForm() {
    this.taskCreatorIsVisible = true;
  }

  ngOnInit() {
  }
}
