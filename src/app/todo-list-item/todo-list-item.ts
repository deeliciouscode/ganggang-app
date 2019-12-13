export class TodoListItem {
   name: string;
   text: string;
   isDone: boolean;

   constructor(name: string, text?: string, isDone?: boolean) {
     this.name = name;
     this.text = (text) ? text : "default text";
     this.isDone = (isDone) ? this.isDone : false;
   }
}
