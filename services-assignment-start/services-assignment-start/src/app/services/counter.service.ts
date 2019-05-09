
export class CounterService {
  private activeConversionsCount = 0;
  private inactiveConversionsCount = 0;

  constructor() {}

  onConvertActive() {
    this.activeConversionsCount++;
    console.log('Active Converstion Action Count: ' + this.activeConversionsCount);
  }

  onConvertInactive() {
    this.inactiveConversionsCount++;
    console.log('Inactive Conversion Action Count: ' + this.inactiveConversionsCount);
  }
}
