import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {CustomerService} from '../services/customer.service';
import {AbstractManageModalComponent} from '../../shared/generic/abstract-manage-modal-component/abstract-manage-modal-component';

@Component({
  selector: 'app-customer-manage-modal',
  templateUrl: './customer-manage-modal.component.html'
})
export class CustomerManageModalComponent extends AbstractManageModalComponent implements OnInit {

  constructor(
    private customerService: CustomerService
  ) {
    super();
  }

  ngOnInit() {
    this.initializeData();
  }

  public initializeData() {
    this.submitButtonText = 'Add'
    this.loading = false;
    if (!this.manageData) {
      this.manageData = {
        fullName: '',
        address: '',
        dateOfBirth: '',
        dateOfDeath: '',
        email: '',
        mobileNo: '',
        residency: '',
        accounts: []
      }
    }

    if (this.context === 'update') {
      this.submitButtonText = 'Edit'
    }

  }

  public reloadPage() {
    this.modalRef.close();
    this.ngOnInit();
  }


  public onSubmit(): void {

    if (this.context === 'update') {
      this.customerService.updateOne(this.manageData.id, this.manageData).subscribe(
        () => {
          this.modalRef.dismiss();
        },
        (error) => {
          this.error = error;
        }
      );
      return;
    }

    this.customerService.createOne(this.manageData).subscribe(
      () => {
        this.modalRef.dismiss();
        window.location.reload();
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
