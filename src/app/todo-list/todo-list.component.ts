import { Component, OnInit } from '@angular/core';
// import { TodoListService } from '../todo-list.service';
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

  taskTitle: string = "";
  taskDescription: string = "";
  private todosCollection: AngularFirestoreCollection<Todo>;
  todos: Observable<Todo[]>;
  showMenu = false;
  showTaskAdder = false;

  deleteElement(fsID) {
    this.todosCollection.doc(fsID).delete();
  }

  toggleTaskAdder() {
    this.showTaskAdder = !this.showTaskAdder;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

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
    if (this.taskTitle !== "" && this.taskDescription !== "") {
      this.todosCollection.doc(id).set(item);
    }
    this.taskTitle = "";
    this.taskDescription = "";
  }

  onDoneChanged(updatedObj) {
    const id = updatedObj.fsID;
    const doneField = { isDone: updatedObj.isDone }
    this.todosCollection.doc(id).update(doneField)
  }

  ngOnInit() {
  }
}
