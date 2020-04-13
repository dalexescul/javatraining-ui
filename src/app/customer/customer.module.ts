import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerManageComponent} from './customer-manage/customer-manage.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerManageComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
