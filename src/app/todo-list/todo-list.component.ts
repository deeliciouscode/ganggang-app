import { Component, OnInit } from '@angular/core';
// import { TodoListService } from '../todo-list.service';
import { TodoListItem } from '../todo-list-item/todo-list-item';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs'

export interface Todo {
    title: string;
    desc: string;
    isDone: boolean;
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
      this.todos = this.todosCollection.valueChanges();
  }

  toggleDone(item: TodoListItem) {
    item.isDone = !item.isDone;
  }

  showForm() {
    this.taskCreatorIsVisible = true;
  }

  addItem() {
    let newTodo: Todo = {
        title: this.taskTitle,
        desc: this.taskDescription,
        isDone: false
    }
    // TODO: implement an update function and publish app on firebase.
    this.taskCreatorIsVisible = false;
    this.taskTitle = "";
    this.taskDescription = "";
  }

  ngOnInit() {
  }

}
