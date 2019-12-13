import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  backround_img = '../assets/img/rocky-mountain.jpg'; 
  
  getUrl() {
    return `url(${this.backround_img})`
  }

  ngOnInit() {
  }

}
