import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
    // TODO: implement firebase data getting -> maybe not in service.ts
    todos: Observable<any[]>;

    constructor(db: AngularFirestore) {
        this.todos = db.collection('items').valueChanges();
    }

    getTodoList() {
        return ["task0", "task1", "task2", "task3", "task4", "task5", "task6", "task7", "task8", "task9"]
    }
}
 