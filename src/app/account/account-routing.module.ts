import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountListComponent} from './account-list/account-list.component';

const routes: Routes = [
  {
    path: '',
    component: AccountListComponent,
    data: {
      title: 'Account Page'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }
