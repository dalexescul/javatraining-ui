import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerManageModalComponent} from './customer-manage/customer-manage-modal.component';
import {CustomerService} from './services/customer.service';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AccountModule} from '../account/account.module';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerManageModalComponent
  ],
  providers: [
    CustomerService
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    SharedModule,
    AccountModule
  ]
})
export class CustomerModule { }
