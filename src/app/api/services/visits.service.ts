/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Visit } from '../models/visit';
import { VisitRegistrationDto } from '../models/visit-registration-dto';
import { VisitClosureDto } from '../models/visit-closure-dto';
import { VisitWithExaminationsDto } from '../models/visit-with-examinations-dto';

/**
 * Visit Endpoint
 */
@Injectable({
  providedIn: 'root',
})
class VisitsService extends __BaseService {
  static readonly getAllUsingGETPath = '/visits';
  static readonly registerVisitUsingPOSTPath = '/visits';
  static readonly cancelVisitUsingPATCHPath = '/visits/cancel/{id}';
  static readonly endVisitUsingPATCHPath = '/visits/end/{id}';
  static readonly getUsingGETPath = '/visits/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Visit>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/visits`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Visit>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllUsingGET(): __Observable<Array<Visit>> {
    return this.getAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Visit>)
    );
  }

  /**
   * @param dto Visit's details
   * @return OK
   */
  registerVisitUsingPOSTResponse(dto: VisitRegistrationDto): __Observable<__StrictHttpResponse<Visit>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/visits`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Visit>;
      })
    );
  }
  /**
   * @param dto Visit's details
   * @return OK
   */
  registerVisitUsingPOST(dto: VisitRegistrationDto): __Observable<Visit> {
    return this.registerVisitUsingPOSTResponse(dto).pipe(
      __map(_r => _r.body as Visit)
    );
  }

  /**
   * @param params The `VisitsService.CancelVisitUsingPATCHParams` containing the following parameters:
   *
   * - `reason`: Reason for canceling visit
   *
   * - `id`: Registered visit's id
   */
  cancelVisitUsingPATCHResponse(params: VisitsService.CancelVisitUsingPATCHParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.reason != null) __params = __params.set('reason', params.reason.toString());

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/visits/cancel/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `VisitsService.CancelVisitUsingPATCHParams` containing the following parameters:
   *
   * - `reason`: Reason for canceling visit
   *
   * - `id`: Registered visit's id
   */
  cancelVisitUsingPATCH(params: VisitsService.CancelVisitUsingPATCHParams): __Observable<null> {
    return this.cancelVisitUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `VisitsService.EndVisitUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Registered visit's id
   *
   * - `details`: Visit ending details
   */
  endVisitUsingPATCHResponse(params: VisitsService.EndVisitUsingPATCHParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.details;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/visits/end/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `VisitsService.EndVisitUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Registered visit's id
   *
   * - `details`: Visit ending details
   */
  endVisitUsingPATCH(params: VisitsService.EndVisitUsingPATCHParams): __Observable<null> {
    return this.endVisitUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id Visit's id
   * @return OK
   */
  getUsingGETResponse(id: number): __Observable<__StrictHttpResponse<VisitWithExaminationsDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/visits/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VisitWithExaminationsDto>;
      })
    );
  }
  /**
   * @param id Visit's id
   * @return OK
   */
  getUsingGET(id: number): __Observable<VisitWithExaminationsDto> {
    return this.getUsingGETResponse(id).pipe(
      __map(_r => _r.body as VisitWithExaminationsDto)
    );
  }
}

module VisitsService {

  /**
   * Parameters for cancelVisitUsingPATCH
   */
  export interface CancelVisitUsingPATCHParams {

    /**
     * Reason for canceling visit
     */
    reason: string;

    /**
     * Registered visit's id
     */
    id: number;
  }

  /**
   * Parameters for endVisitUsingPATCH
   */
  export interface EndVisitUsingPATCHParams {

    /**
     * Registered visit's id
     */
    id: number;

    /**
     * Visit ending details
     */
    details: VisitClosureDto;
  }
}

export { VisitsService }
