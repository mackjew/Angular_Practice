import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})

export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private curRoute: ActivatedRoute) { }

  ngOnInit() {
    this.errorMessage = this.curRoute.snapshot.data['message'];
    this.curRoute.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    )
  }

}
