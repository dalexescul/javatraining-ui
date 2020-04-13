import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export abstract class RestfulService extends ApiService {

  public getAll(page: number = 0, itemsPerPage: number = 25): Observable<any> {
    return this.get(`/?page=${page}&itemsPerPage=${itemsPerPage}`)
      .pipe(map((res: any) => res));
  }

  public getPaginationData(): Observable<any> {
    return this.get(`/?page=0&itemsPerPage=1`)
      .pipe(map((res: any) => res.json().pagination_metadata)); //should make a count in backend -- missing endpoint
  }

  public getOne(id: string): Observable<any> {
    return this.get(`/${id}`)
      .pipe(map((res: any) => res.data));
  }

  public updateOne(id: string, data: any): Observable<any> {
    return this.put(`/${id}`, data)
      .pipe(map((res: any) => res.data));
  }

  public createOne(data: any): Observable<any> {
    return this.post(`/`, data)
      .pipe(map((res: any) => res.data));
  }
}
