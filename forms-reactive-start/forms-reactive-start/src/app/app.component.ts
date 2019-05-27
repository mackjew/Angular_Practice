import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup(
      //keynames are wrapped in single quotes to prevent it getting mangled in minification. It needs to get reference from
      // html and min process may mess it up.
      {
        'username': new FormControl(null),
        'email': new FormControl(null),
        'gender': new FormControl('male')
      }
    );
  }
}
