import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'done-field',
  templateUrl: './done-field.component.html',
  styleUrls: ['./done-field.component.css']
})
export class DoneFieldComponent implements OnInit {
  @Input() isDone: boolean;
  @Output() change = new EventEmitter();

  constructor() {
   }

  onClick() {
    this.isDone = !this.isDone;
    this.change.emit(this.isDone);
  }

  ngOnInit() {
  }
}
