import { LoggingService } from './logging.services';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  //This is an event emitter set up inside a service. This can allow cross-component communication. If you want components to
  // talk to teach other without having to set up a tedious never ending relays of event emitters and event binding, this
  // is the way to do it.
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }

}
