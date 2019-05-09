import { AccountsService } from './../services/accounts.services';
import { Component } from '@angular/core';
import {LoggingService} from '../services/logging.services';
import { makeDecorator } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }

  // this is a service: this constructor is getting the LoggingService class passed to it by angular. This stays within
  // the angular ecosystem. The service class will also need to be declared up in the @Component makeDecorator.
  constructor( private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe((status:string) => alert('New Status: ' + status));
   }
}
