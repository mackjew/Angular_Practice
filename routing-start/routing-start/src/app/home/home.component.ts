import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(serverID: number) {
    // this navigate function takes in a second arg in the form of a JS object. This object is can have config info
    // such as 'relativeTo', 'queryParams', 'fragment', and others
    this.router.navigate(['/servers', serverID, 'edit'], {queryParams: {allowEdit: 1}, fragment: "loading"});
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
