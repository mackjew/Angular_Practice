import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable()

export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private countService: CounterService) {}

  setToActive(id: number) {
    const toSwitch = this.inactiveUsers[id];
    this.inactiveUsers.splice(id, 1);
    this.activeUsers.push(toSwitch);
    this.countService.onConvertActive();
  }

  setToInactive(id: number) {
    const toSwitch = this.activeUsers[id];
    this.activeUsers.splice(id, 1);
    this.inactiveUsers.push(toSwitch);
    this.countService.onConvertInactive();
  }
}
