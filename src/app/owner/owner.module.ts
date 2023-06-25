import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule, ownerRouterConfig } from './owner-routing.module';
import { OwnerAccountsComponent } from './owner-details/owner-accounts/owner-accounts.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ownerRouterConfig, OwnerAccountsComponent],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class OwnerModule {}
