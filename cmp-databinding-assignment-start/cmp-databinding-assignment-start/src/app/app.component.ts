import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public allNumbers: number[] = [];

  catchNumber(newNumber: { newNum: number }) {
    console.log(newNumber.newNum);
    this.allNumbers.push(newNumber.newNum);
  }
}
