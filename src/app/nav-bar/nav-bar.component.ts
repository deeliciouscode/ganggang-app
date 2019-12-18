import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // navList = [{
  //   name: "Home",
  //   desc: "the home page of the app"
  // }, {
  //   name: "Todo",
  //   desc: "the todo page of the app"
  // }, {
  //   name: "Clean",
  //   desc: "the clean page of the app"
  // }]

  menu_icon = '../assets/img/Menu-2-512.png';
  filter_icon = '../assets/img/filter_1.png'; 
  
  getMenuUrl() {
    return `url(${this.menu_icon})`
  }

  getFilterUrl() {
    return `url(${this.filter_icon})`
  }

  constructor() { }

  ngOnInit() {
  }
}
