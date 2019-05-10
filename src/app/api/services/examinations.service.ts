/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LaboratoryExamination } from '../models/laboratory-examination';
import { AssistantClosureDto } from '../models/assistant-closure-dto';
import { SupervisorClosureDto } from '../models/supervisor-closure-dto';

/**
 * Examination Endpoint
 */
@Injectable({
  providedIn: 'root',
})
class ExaminationsService extends __BaseService {
  static readonly approveUsingPATCHPath = '/examinations/approve/{id}';
  static readonly cancelUsingPATCHPath = '/examinations/cancel/{id}';
  static readonly finishUsingPATCHPath = '/examinations/finish/{id}';
  static readonly rejectUsingPATCHPath = '/examinations/reject/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ExaminationsService.ApproveUsingPATCHParams` containing the following parameters:
   *
   * - `supervisorId`: Supervisor's id
   *
   * - `id`: Laboratory examination's id
   *
   * @return OK
   */
  approveUsingPATCHResponse(params: ExaminationsService.ApproveUsingPATCHParams): __Observable<__StrictHttpResponse<LaboratoryExamination>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.supervisorId != null) __params = __params.set('supervisorId', params.supervisorId.toString());

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/examinations/approve/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboratoryExamination>;
      })
    );
  }
  /**
   * @param params The `ExaminationsService.ApproveUsingPATCHParams` containing the following parameters:
   *
   * - `supervisorId`: Supervisor's id
   *
   * - `id`: Laboratory examination's id
   *
   * @return OK
   */
  approveUsingPATCH(params: ExaminationsService.ApproveUsingPATCHParams): __Observable<LaboratoryExamination> {
    return this.approveUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as LaboratoryExamination)
    );
  }

  /**
   * @param params The `ExaminationsService.CancelUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Laboratory examination's id
   *
   * - `details`: Assistant's id and reason for canceling
   *
   * @return OK
   */
  cancelUsingPATCHResponse(params: ExaminationsService.CancelUsingPATCHParams): __Observable<__StrictHttpResponse<LaboratoryExamination>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.details;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/examinations/cancel/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboratoryExamination>;
      })
    );
  }
  /**
   * @param params The `ExaminationsService.CancelUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Laboratory examination's id
   *
   * - `details`: Assistant's id and reason for canceling
   *
   * @return OK
   */
  cancelUsingPATCH(params: ExaminationsService.CancelUsingPATCHParams): __Observable<LaboratoryExamination> {
    return this.cancelUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as LaboratoryExamination)
    );
  }

  /**
   * @param params The `ExaminationsService.FinishUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Laboratory examination's id
   *
   * - `details`: Assistant's id and result of examination
   *
   * @return OK
   */
  finishUsingPATCHResponse(params: ExaminationsService.FinishUsingPATCHParams): __Observable<__StrictHttpResponse<LaboratoryExamination>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.details;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/examinations/finish/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboratoryExamination>;
      })
    );
  }
  /**
   * @param params The `ExaminationsService.FinishUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Laboratory examination's id
   *
   * - `details`: Assistant's id and result of examination
   *
   * @return OK
   */
  finishUsingPATCH(params: ExaminationsService.FinishUsingPATCHParams): __Observable<LaboratoryExamination> {
    return this.finishUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as LaboratoryExamination)
    );
  }

  /**
   * @param params The `ExaminationsService.RejectUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Laboratory examination's id
   *
   * - `details`: Supervisor's id and reason for rejecting
   *
   * @return OK
   */
  rejectUsingPATCHResponse(params: ExaminationsService.RejectUsingPATCHParams): __Observable<__StrictHttpResponse<LaboratoryExamination>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.details;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/examinations/reject/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboratoryExamination>;
      })
    );
  }
  /**
   * @param params The `ExaminationsService.RejectUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Laboratory examination's id
   *
   * - `details`: Supervisor's id and reason for rejecting
   *
   * @return OK
   */
  rejectUsingPATCH(params: ExaminationsService.RejectUsingPATCHParams): __Observable<LaboratoryExamination> {
    return this.rejectUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as LaboratoryExamination)
    );
  }
}

module ExaminationsService {

  /**
   * Parameters for approveUsingPATCH
   */
  export interface ApproveUsingPATCHParams {

    /**
     * Supervisor's id
     */
    supervisorId: number;

    /**
     * Laboratory examination's id
     */
    id: number;
  }

  /**
   * Parameters for cancelUsingPATCH
   */
  export interface CancelUsingPATCHParams {

    /**
     * Laboratory examination's id
     */
    id: number;

    /**
     * Assistant's id and reason for canceling
     */
    details: AssistantClosureDto;
  }

  /**
   * Parameters for finishUsingPATCH
   */
  export interface FinishUsingPATCHParams {

    /**
     * Laboratory examination's id
     */
    id: number;

    /**
     * Assistant's id and result of examination
     */
    details: AssistantClosureDto;
  }

  /**
   * Parameters for rejectUsingPATCH
   */
  export interface RejectUsingPATCHParams {

    /**
     * Laboratory examination's id
     */
    id: number;

    /**
     * Supervisor's id and reason for rejecting
     */
    details: SupervisorClosureDto;
  }
}

export { ExaminationsService }
