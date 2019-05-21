import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params, Router, Route, Data } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  private sub: Subscription;

  constructor(private serversService: ServersService, private curRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.curRoute.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // this.server = this.serversService.getServer(+this.curRoute.snapshot.params['id']);
    // this.sub = this.curRoute.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['./edit'], {relativeTo: this.curRoute, queryParamsHandling: 'preserve'});
  }
}
