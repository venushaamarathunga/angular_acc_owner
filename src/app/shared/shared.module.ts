import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [ErrorModalComponent],
  imports: [CommonModule], // ModalModule.forChild()],
  exports: [ErrorModalComponent],
})
export class SharedModule {}
