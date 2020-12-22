import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Input} from '@angular/core';

export abstract class AbstractManageModalComponent {
  @Input() context: string;
  @Input() modalRef: NgbModalRef;
  @Input() manageData: any;
  public error: string;
  public loading = true;
  public submitButtonDisabled = false
  public submitButtonText: string

  public getIconDependingOnContext(): string {
    return this.context === 'update' ? 'ft-edit-2' : 'ft-plus-circle'
  }

  public getColorDependingOnContext(): string {
    return this.context === 'update' ? 'btn-warning' : 'btn-success'
  }
}
