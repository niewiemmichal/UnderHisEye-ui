/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Examination } from '../models/examination';

/**
 * Icd Endpoint
 */
@Injectable({
  providedIn: 'root',
})
class IcdService extends __BaseService {
  static readonly getAllExaminationsUsingGETPath = '/icd';
  static readonly getExaminationUsingGETPath = '/icd/{code}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllExaminationsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Examination>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/icd`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Examination>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllExaminationsUsingGET(): __Observable<Array<Examination>> {
    return this.getAllExaminationsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Examination>)
    );
  }

  /**
   * @param code ICD-9 code
   * @return OK
   */
  getExaminationUsingGETResponse(code: string): __Observable<__StrictHttpResponse<Examination>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/icd/${code}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Examination>;
      })
    );
  }
  /**
   * @param code ICD-9 code
   * @return OK
   */
  getExaminationUsingGET(code: string): __Observable<Examination> {
    return this.getExaminationUsingGETResponse(code).pipe(
      __map(_r => _r.body as Examination)
    );
  }
}

module IcdService {
}

export { IcdService }
