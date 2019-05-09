
//This is a service. There is nothing special about the service class. Its actually just a normal TypeScript class
// much like a Model class. The only difference is in how it is instanciated and passed to the utilizing component.
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status ' + status);
  }
}
