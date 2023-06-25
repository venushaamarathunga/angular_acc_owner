import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //   { path: 'ownerlist', component: OwnerListComponent },
  //   { path: 'details/:id', component: OwnerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerRoutingModule {}

export const ownerRouterConfig = []; // [OwnerListComponent, OwnerDetailsComponent];
