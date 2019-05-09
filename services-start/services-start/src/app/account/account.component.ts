import { AccountsService } from './../services/accounts.services';
import { LoggingService } from './../services/logging.services';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange('A server status changed, new status: ' + status);
  }

  constructor(/*private loggingService: LoggingService*/ private accountsService: AccountsService) {  }
}
