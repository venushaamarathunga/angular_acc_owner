import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  public errorMessage: string = '';
  constructor(private router: Router) {}

  public handleError = (error: HttpErrorResponse) => {
    if (error.status === 500) {
      this.handle500Error(error);
    } else if (error.status === 400) {
      this.handle400Error(error);
    } else {
      this.handleOtherError(error);
    }
  };

  private handle500Error = (error: HttpErrorResponse) => {
    this.CreateErrorMessage(error);
    this.router.navigate(['/500']);
  };

  private handle400Error = (error: HttpErrorResponse) => {
    this.CreateErrorMessage(error);
    this.router.navigate(['/400']);
  };

  private handleOtherError = (error: HttpErrorResponse) => {
    this.CreateErrorMessage(error);

    // const config: any = {
    //   initialState: {
    //     modalHeaderText: 'Error Message',
    //     modalBodyText: this.errorMessage,
    //     okButtonText: 'OK',
    //   },
    // };
    // this.modal.show(ErrorModalComponent, config);
  };

  private CreateErrorMessage = (error: HttpErrorResponse) => {
    this.errorMessage = error.error ? error.error : error.statusText;
  };
}
