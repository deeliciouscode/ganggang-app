import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navList = [{
    name: "home",
    desc: "the home page of the app"
  }, {
    name: "todo",
    desc: "the todo page of the app"
  }, {
    name: "clean",
    desc: "the clean page of the app"
  }]

  constructor() { }

  ngOnInit() {
  }
}
