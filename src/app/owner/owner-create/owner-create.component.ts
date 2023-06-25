import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { SuccessModalComponent } from './../../shared/modals/success-modal/success-modal.component';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { OwnerRepositoryService } from './../../shared/services/owner-repository.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwnerForCreation } from '../../_interfaces/OwnerForCreation.model';
import { Owner } from '../../_interfaces/owner.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss'],
})
export class OwnerCreateComponent implements OnInit {
  errorMessage: string = '';
  ownerForm: FormGroup | any;

  constructor(
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private datePipe: DatePipe,
    private repo: OwnerRepositoryService
  ) {}

  ngOnInit(): void {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
      ]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
    });
  }

  validateControl = (controlName: string) => {
    if (
      this.ownerForm.get(controlName).invalid &&
      this.ownerForm.get(controlName).touched
    )
      return true;
    return false;
  };

  hasError = (controlName: string, errorName: string) => {
    if (this.ownerForm.get(controlName).hasError(errorName)) return true;
    return false;
  };

  createOwner = (ownerFormValue: any) => {
    if (this.ownerForm.valid) this.executeOwnerCreation(ownerFormValue);
  };

  private executeOwnerCreation = (ownerFormValue: any) => {
    const owners: OwnerForCreation = {
      name: ownerFormValue.name,
      dateOfBirth: this.datePipe.transform(
        ownerFormValue.dateOfBirth,
        'yyyy-MM-dd'
      ),
      address: ownerFormValue.address,
    };

    const apiUrl = 'api/owner';
    this.repo.createOwner(apiUrl, owners).subscribe({
      next: (own: Owner) => {
        const config: any = {
          initialState: {
            modalHeaderText: 'Success Message',
            modalBodyText: `Owner: ${own.name} created successfully`,
            okButtonText: 'OK',
          },
        };
        // this.redirectOnOk.subscribe(_) => this.redirectToOwnerList();
        this.redirectToOwnerList();
      },
      error: (err: HttpErrorResponse) => {
        this.errorHandler.handleError(err);
        this.errorMessage = this.errorHandler.errorMessage;
      },
    });
  };

  redirectToOwnerList = () => {
    this.router.navigate(['/owner/list']);
  };
}
