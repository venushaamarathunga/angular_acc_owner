import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Account } from './../../../_interfaces/account.model';

@Component({
  selector: 'app-owner-accounts',
  templateUrl: './owner-accounts.component.html',
  styleUrls: ['./owner-accounts.component.scss'],
})
export class OwnerAccountsComponent {
  @Input() accounts: Account[] | undefined;
  @Output() onAccountClick: EventEmitter<Account> = new EventEmitter();

  onAccountClicked = (account: Account) => {
    this.onAccountClick.emit(account);
  };
}
