import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  //Router class allows you to change and navigate to new URLS in your domain. ActivatedRoute is a class
  //that allows access to the current route that the app is currently on.
  constructor(private serversService: ServersService, private router: Router, private curRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    //Generally in HTML this 'servers' URL without a slash, would be relative path. However the default in code is that it is from the root domain.
    // The second arg in a JS object can be used to pass config info for the new route to navigate to. 'relativeTo' can specify the base relative path to add new
    // path part on to.
    this.router.navigate(['servers'], {relativeTo: this.curRoute});
  }
}
