import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    //writing a .online css class here.
    styles: [' .online { color: white; } ']
})

export class ServerComponent {
    serverID = 10;
    serverStatus = 'offline';

    constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
      return this.serverStatus;
    }

    getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
