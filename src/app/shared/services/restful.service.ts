import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export abstract class RestfulService extends ApiService {

  public getAll(page: number = 0, itemsPerPage: number = 25): Observable<Response> {
    return this.get(`/?page=${page}&itemsPerPage=${itemsPerPage}`)
      .pipe(map((res: Response) => res));
  }

  public getOne(id: string): Observable<Response> {
    return this.get(`/${id}`)
      .pipe(map((res: any) => res.data));
  }

  public updateOne(id: string, data: object): Observable<Response> {
    return this.put(`/${id}`, data)
      .pipe(map((res: any) => res.data));
  }

  public createOne(data: object): Observable<Response> {
    return this.post(`/`, data)
      .pipe(map((res: Response) => res));
  }
}
