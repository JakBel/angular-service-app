import { Component } from '@angular/core';
import { LoggingServices } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingServices],
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingServices,
    private accountsService: AccountService
  ) {
    this.accountsService.statusUpdate.subscribe((status: string) =>
      alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
