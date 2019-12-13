import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  backround_img = '../assets/img/plus-sign.png'; 
  
  getUrl() {
    return `url(${this.backround_img})`
  }

  ngOnInit() {
  }

}
