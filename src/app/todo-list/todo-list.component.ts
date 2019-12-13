import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { TodoListItem } from '../todo-list-item/todo-list-item';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = "Todo's for the Gang"
  lorem_ipsum = `Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.`
  private todo_list: Array<TodoListItem>;

  taskCreatorIsVisible: boolean = false;
  taskTitle: string = "";
  taskDescription: string = "";


  constructor(service: TodoListService) {
    this.todo_list = Array();
    this.createListElements(service.getTodoList());
  }

  createListElements(list) {
    list.forEach(e => { this.todo_list.push(new TodoListItem(e, this.lorem_ipsum, false))});
  }

  toggleDone(item: TodoListItem) {
    item.isDone = !item.isDone;
  }

  showForm() {
    this.taskCreatorIsVisible = true;
  }

  addItem() {
    this.todo_list.push(new TodoListItem(this.taskTitle, this.taskDescription, false))
    this.taskCreatorIsVisible = false;
    this.taskTitle = "";
    this.taskDescription = "";
  }

  ngOnInit() {
  }

}
