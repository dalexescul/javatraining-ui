import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {AbstractListComponent} from '../../shared/generic/abstract-list-component/abstract-list-component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CustomerManageModalComponent} from '../customer-manage/customer-manage-modal.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent extends AbstractListComponent {

  constructor(private customerService: CustomerService, private modalService: NgbModal) {
    super()
  }

  openCustomerCreateModal() {
    const modalRef = this.modalService.open(CustomerManageModalComponent, {scrollable: true, keyboard: false, backdrop: 'static', size: 'lg'});
    modalRef.componentInstance.modalRef = modalRef
    modalRef.componentInstance.context = 'create'
  }

  openCustomerUpdateModal(customer: any) {
    const modalRef = this.modalService.open(CustomerManageModalComponent, {scrollable: true, keyboard: false, backdrop: 'static', size: 'lg'});
    modalRef.componentInstance.modalRef = modalRef
    modalRef.componentInstance.manageData = customer
    modalRef.componentInstance.context = 'update'
  }

  getDataService() {
    return this.customerService
  }
}
