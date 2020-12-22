import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export abstract class ApiService {
  public constructor(private http: HttpClient) {
  }

  protected getBasePath(): string {
    return environment.api_base;
  }

  protected abstract getResourcePath(): string;

  private getUrl(path: string): string {
    const basePath = this.getBasePath();
    const resourcePath = this.getResourcePath;

    return `${basePath}${resourcePath()}${path}`;
  }

  protected get(url: string): Observable<Response> {
    url = this.getUrl(url);

    return new Observable((observer: Observer<Response>) => {
      this.http.get(url).subscribe(
        (response: Response) => {
          observer.next(response);
          observer.complete();
        },
        (error: HttpErrorResponse) => {
          const genericError = this.hasGenericError(error, observer);
          if (genericError) {
            return;
          }

          observer.error(error.error.errors);
          observer.complete();
        }
      );
    });
  }

  protected post(url: string, body: object): Observable<Response> {
    url = this.getUrl(url);

    return new Observable((observer: Observer<Response>) => {
      this.http.post(url, body).subscribe(
        (response: Response) => {
          observer.next(response);
          observer.complete();
        },
        (error: HttpErrorResponse) => {
          const genericError = this.hasGenericError(error, observer);
          if (genericError) {
            return;
          }
          observer.error(error.error.errors);
          observer.complete();
        }
      );
    });
  }

  protected put(url: string, body: object): Observable<Response> {
    url = this.getUrl(url);

    return new Observable((observer: Observer<Response>) => {
      this.http.put(url, body).subscribe(
        (response: Response) => {
          observer.next(response);
          observer.complete();
        },
        (error: HttpErrorResponse) => {
          const genericError = this.hasGenericError(error, observer);
          if (genericError) {
            return;
          }
          observer.error(error.error.errors);
          observer.complete();
        }
      );
    });
  }

  private hasGenericError(error, observer): boolean {
    if (true === error.error.hasOwnProperty('errors')) {
      return false;
    }

    observer.error([
      {
        property_path: 'general',
        message: error.message
      }
    ]);
    observer.complete();

    return true;
  }
}
