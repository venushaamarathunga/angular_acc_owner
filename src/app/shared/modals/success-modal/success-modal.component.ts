import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
})
export class SuccessModalComponent {
  modalHeaderText: string = '';
  modalBodyText: string = '';
  okButtonText: string = '';
  redirectOnOk: EventEmitter<any> = new EventEmitter();

  onOkClicked = () => {
    this.redirectOnOk.emit();
  };
}
