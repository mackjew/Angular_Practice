import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(private curRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.curRoute.snapshot.params['id'],
      name: this.curRoute.snapshot.params['name']
    }

    this.paramsSubscription = this.curRoute.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  //because curRoute.params is an observable that is subscribed on to detect when changes occur, its important to notice that on observables that ship with Angular,
  // the subscribed observables will unsub themselves but on observables you create, you will need to manually unsubscribe.
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }





}
