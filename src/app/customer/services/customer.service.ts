import {Injectable} from '@angular/core';
import {RestfulService} from '../../shared/services/restful.service';

@Injectable()
export class CustomerService extends RestfulService {

  protected getResourcePath(): string {
    return '/customer';
  }
}
