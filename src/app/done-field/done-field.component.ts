import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'done-field',
  templateUrl: './done-field.component.html',
  styleUrls: ['./done-field.component.css']
})
export class DoneFieldComponent implements OnInit {
  @Input() isDone: boolean;

  constructor() {
    this.isDone = true;
   }

  ngOnInit() {
  }
}
