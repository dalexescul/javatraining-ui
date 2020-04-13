import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountListComponent} from './account-list/account-list.component';
import {AccountManageComponent} from './account-manage/account-manage.component';
import {AccountRoutingModule} from './account-routing.module';


@NgModule({
  declarations: [AccountListComponent, AccountManageComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
