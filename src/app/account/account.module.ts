import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountListComponent} from './account-list/account-list.component';
import {AccountManageComponent} from './account-manage/account-manage.component';
import {AccountRoutingModule} from './account-routing.module';
import {SharedModule} from '../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [AccountListComponent, AccountManageComponent],
  exports: [
    AccountListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class AccountModule {
}
