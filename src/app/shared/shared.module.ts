import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppendDirective } from './directives/append.directive';

@NgModule({
  declarations: [ErrorModalComponent, AppendDirective],
  imports: [CommonModule], // ModalModule.forChild()],
  exports: [ErrorModalComponent, AppendDirective],
})
export class SharedModule {}
