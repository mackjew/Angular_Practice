import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';


@Component({
  selector: 'app-button-log',
  templateUrl: './button-log.component.html',
  styleUrls: ['./button-log.component.css']
})
export class ButtonLogComponent implements OnInit {

  blueTime : number = 0;
  button_clicks : number[] = [];
  hideText = false;

  constructor() { }

  ngOnInit() {

  }

  toggleHideText() {
    let curTime : number = new Date().getTime();

    this.hideText = !this.hideText;
    this.button_clicks.push( curTime );
    if(this.button_clicks.length == 4)
      this.blueTime = new Date().getTime();

    //this.button_clicks[0].split("-", 1)[0];
  }

  getColor(time : number) {
    if(this.blueTime != 0 && time > this.blueTime)
      return 'white';
    else
      return 'black';
  }

}
