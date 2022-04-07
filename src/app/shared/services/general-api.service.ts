import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from '@core/config/config.service';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';

// https://levelup.gitconnected.com/the-correct-way-to-make-api-requests-in-an-angular-application-22a079fe8413
@Injectable({
  providedIn: 'root'
})
export class GeneralApiService {
  //API
  apiUrl = '';
  currentLang = 'en';

  options = {};

  private http: HttpClient;

  constructor(
    private httpClient: HttpClient,
    private config: ConfigService,
    private translocoService: TranslocoService
  ) {
    this.http = httpClient;
    this.apiUrl = this.config.baseUrlApi as string;
    this.currentLang = this.translocoService.getActiveLang();
  }

  /**
   * Create
   */

  readObs<T>(
    url: string,
    query?: HttpParams | string | any,
    responseType?: string | any
  ): Observable<any[] | Object | T | any> {
    const options = {
      params: new HttpParams(),
      responseType: undefined
    };

    if (query) {
      options.params = this.createSearchParams(query);
    }

    if (responseType) {
      options.responseType = responseType;
    }

    return this.http.get(url, options);
  }

  readPromise<T>(url: string, query?: HttpParams | string | any, responseType?: string | any): Promise<T | any> {
    console.log(
      `execute readPromise<T> function with url : ${url} - query: ${JSON.stringify(
        query
      )} - responseType: ${responseType}`
    );

    const options = {
      params: new HttpParams(),
      responseType: undefined
    };

    if (query) {
      // console.log('readPromise<T> query is present: ');
      options.params = this.createSearchParams(query);
      // console.log(`<!--readObs<T> query is present: updated options object is : -->${JSON.stringify(options)} `);
    }

    if (responseType) {
      // console.log('readPromise<T> responseType is present: ');
      options.responseType = responseType;
      // console.log(`<!--readPromise<T> responseType is present: updated options object is : -->${JSON.stringify(options)} `);
    }

    // console.log(`readPromise - options before http.get is : ${JSON.stringify(options)}`);

    return this.http.get(url, options).toPromise();
  }

  /**
   * UPDATE
   *
   */

  update(url, id, data) {
    return this.http.put(`${url}/${id}`, data);
  }

  /**
   * DELETE
   *
   */

  deleteByParam() {}

  deleteById(url: string, id: string | number) {
    return this.http.delete(`${url}/${id}`);
  }

  deleteAll(url: string) {
    return this.http.delete(url);
  }

  // utils

  private createSearchParams(query: HttpParams | string | any): HttpParams {
    // console.log(`execute createSearchParams : ${JSON.stringify(query)}`);
    let newParams = new HttpParams();

    if (typeof query === 'string') {
      // console.log('query is of type string');
      let searchParams = new HttpParams();
      const splitQuery = query.split('&');
      splitQuery.forEach((param) => {
        const keyValPair = param.split('=');
        searchParams = searchParams.set(keyValPair[0], keyValPair[1]);
      });
      // console.log('searchParams made from query type string is : " ' + JSON.stringify(searchParams));
      newParams = searchParams;
    } else if (query instanceof HttpParams) {
      // console.log('query is of type HttpParams');
      newParams = query;
    } else {
      // Parse object into HttpParams
      Object.keys(query).forEach((key) => {
        newParams = newParams.set(key, query[key]);
      });
      // console.log('query is of type Object and parse it into httpparams');
      // console.log('newparams made from query type object is : " ' + JSON.stringify(newParams));
    }

    // console.log(`return newParams of createSearchparams : ${JSON.stringify(newParams)}`);
    return newParams;
  }
}
