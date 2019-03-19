import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'the name';
  isButtonActive = true;

  onButtonClick() {
    this.username = '';
    this.isButtonActive = false;
  }

  evalButtonActivity() {
    if (this.username.length === 0) {
      this.isButtonActive = false;
    }
    else {
      this.isButtonActive = true;
    }
  }
}
