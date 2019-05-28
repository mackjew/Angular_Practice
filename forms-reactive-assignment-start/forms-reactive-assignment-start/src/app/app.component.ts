import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  invalidNames = ['Test', 'test'];

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        'projectName': new FormControl(null, [Validators.required, this.checkProjNameValidator.bind(this)], this.checkProjNameAsyncValidator.bind(this)),
        'email': new FormControl(null, [Validators.required, Validators.email, this.checkProjEmail.bind(this)]),
        'projectStatus': new FormControl(null, [Validators.required])
      }
    );
  }

  onSubmit() {
    console.log(this.myForm);
    this.myForm.updateValueAndValidity();
  }

  checkProjNameValidator(control: FormControl): {[s: string]: boolean} {
    if(this.invalidNames.indexOf(control.value) !== -1) {
      //console.log(control.value + " " + this.invalidNames.indexOf(control.value));
      return {'nameIsForbidden': true};
    }
    return null;
  }

  checkProjNameAsyncValidator(control: FormControl): Promise<any> | Observable<any>  {
    const promise = new Promise<any>((resolve, reject) => {
      if(this.invalidNames.indexOf(control.value) !== -1) {
        resolve({'nameIsForbidden': true})
      }
      else {
        resolve(null);
      }
    });
    return promise;
  }

  checkProjEmail(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'test@test.com') {
      return {'emailIsForbidden': true}
    }
    return null;
  }
}
