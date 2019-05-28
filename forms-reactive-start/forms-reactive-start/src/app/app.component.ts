import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenNames = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup(
      //keynames are wrapped in single quotes to prevent it getting mangled in minification. It needs to get reference from
      // html and min process may mess it up.
      {
        'userData': new FormGroup(
          {
            'username': new FormControl(null, [Validators.required, this.forbiddenNamesValidator.bind(this)]),
            'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailsAsyncValidator.bind(this)),
          }
        ),
        'gender': new FormControl('male'),
        'hobbies': new FormArray([])
      }
    );
    this.signupForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
    this.signupForm.statusChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
    //use setValue() to initalize an entire form. The JS object must fully match the heirarchy that was set up in overall FormGroup like above.
    //this includes form values that you don't intend to initalize with any default values.
    // When setting Arrays of form values you cannot init with an array of values. Must be an empty array.
    this.signupForm.setValue(
      {
        'userData': {
          'username': 'MAx',
          'email': 'max@gmail.com'
        },
        'gender': 'male',
        'hobbies': []
      }
    );
    //patchValue() can initalize just a single part of the form. Your JS object heirarchy can be missing certain parts of the main FormGroup like above,
    // but they need to be key-value pairs need to be in the same position.
    this.signupForm.patchValue(
      {
        'userData': {
          'username': 'jack'
        }
      }
    );
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log("Submit clicked!");
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
    console.log("Add Hobby clicked!");
  }

  //Custom validator. Important: must return of type {[s: string]: boolean}. If the value is invalid then the boolean must be true. If the value is valid then
  // must return null. true = invalid, null = valid.
  forbiddenNamesValidator(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenNames.indexOf(control.value) !== -1)
    {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmailsAsyncValidator(controls: FormControl): Promise<any> | Observable<any> {
    const  promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(controls.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else{
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  getHobbiesFormArray() {
    return (<FormArray>this.signupForm.get('hobbies'));
  }
}
