import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  getTodoList() {
    return ["task0", "task1", "task2", "task3", "task4", "task5", "task6", "task7", "task8", "task9"]
  }
}
