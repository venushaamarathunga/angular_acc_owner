import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';

const routes: Routes = [
  { path: 'ownerlist', component: OwnerListComponent },
  { path: 'details/:id', component: OwnerDetailsComponent },
  { path: 'create', component: OwnerCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerRoutingModule {}

export const ownerRouterConfig = [
  OwnerListComponent,
  OwnerDetailsComponent,
  OwnerCreateComponent,
];
