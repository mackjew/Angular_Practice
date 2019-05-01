import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private theNum: number = 0;
  private intervalTime = 800;
  private intervalID: number;

  @Output() newNum: EventEmitter<{ newNum: number }> = new EventEmitter<{ newNum: number }>();

  constructor() { }

  ngOnInit() {
    console.log(this.theNum);
    console.log("ngOnInit called \n" + "setting up the time interval to be " + this.intervalTime + " milliseconds");
  }

  startGame() {
    this.intervalID = window.setInterval(this.incrementTheNum, this.intervalTime, this);
  }

  stopGame() {
    window.clearInterval(this.intervalID);
  }

  //Expecting a GameControlObject because when the setInterval function is called and this function is passed to it, the function loses all references to the original object its a part of. So referencing this.theNum is actually 'undefined'. Passing 'this' solves that problem.
  incrementTheNum(gameConObj: GameControlComponent) {
    console.log("incrementTheNum() called!");
    gameConObj.theNum++;
    gameConObj.newNum.emit({newNum: gameConObj.theNum});
  }
}
