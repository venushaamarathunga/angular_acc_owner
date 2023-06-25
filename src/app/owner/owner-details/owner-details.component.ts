import { Component, OnInit } from '@angular/core';
import { Owner } from './../../_interfaces/owner.model';
import { OwnerRepositoryService } from '../../shared/services/owner-repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from '../../shared/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Account } from './../../_interfaces/account.model';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss'],
})
export class OwnerDetailsComponent implements OnInit {
  owner: Owner | undefined;
  errorMessage: string = '';

  constructor(
    private repository: OwnerRepositoryService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getOwnerDetails();
  }
  getOwnerDetails = () => {
    const id: string = this.activeRouter.snapshot.params['id'];
    const apiUrl: string = `api/owner/${id}/account`;

    this.repository.getOwner(apiUrl).subscribe({
      next: (own: Owner) => (this.owner = own),
      error: (err: HttpErrorResponse) => {
        this.errorHandler.handleError(err);
        this.errorMessage = this.errorHandler.errorMessage;
      },
    });
  };

  printToConsole = (param: Account) => {
    console.log('Account parameter from the child component', param);
  };
}
