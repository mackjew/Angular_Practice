import { Subscription } from 'rxjs/Subscription';
import { UsersService } from './../users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  id: number;
  routeObserver: Subscription;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.routeObserver = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  onActivate() {
    this.usersService.userActivated.next(this.id);
  }

  ngOnDestroy() {
    this.routeObserver.unsubscribe();
  }

}
