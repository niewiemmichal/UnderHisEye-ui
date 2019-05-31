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
class LaboratoryExaminationsService extends __BaseService {
  static readonly getAllLaboratoryExaminationsUsingGETPath = '/examinations';
  static readonly approveUsingPATCHPath = '/examinations/approve/{id}';
  static readonly cancelUsingPATCHPath = '/examinations/cancel/{id}';
  static readonly finishUsingPATCHPath = '/examinations/finish/{id}';
  static readonly rejectUsingPATCHPath = '/examinations/reject/{id}';
  static readonly getAllLaboratoryExaminationsByStatusUsingGETPath = '/examinations/{status}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllLaboratoryExaminationsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<LaboratoryExamination>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/examinations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LaboratoryExamination>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllLaboratoryExaminationsUsingGET(): __Observable<Array<LaboratoryExamination>> {
    return this.getAllLaboratoryExaminationsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<LaboratoryExamination>)
    );
  }

  /**
   * @param params The `LaboratoryExaminationsService.ApproveUsingPATCHParams` containing the following parameters:
   *
   * - `supervisorId`: Supervisor's id
   *
   * - `id`: Laboratory examination's id
   *
   * @return OK
   */
  approveUsingPATCHResponse(params: LaboratoryExaminationsService.ApproveUsingPATCHParams): __Observable<__StrictHttpResponse<LaboratoryExamination>> {
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
   * @param params The `LaboratoryExaminationsService.ApproveUsingPATCHParams` containing the following parameters:
   *
   * - `supervisorId`: Supervisor's id
   *
   * - `id`: Laboratory examination's id
   *
   * @return OK
   */
  approveUsingPATCH(params: LaboratoryExaminationsService.ApproveUsingPATCHParams): __Observable<LaboratoryExamination> {
    return this.approveUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as LaboratoryExamination)
    );
  }

  /**
   * @param params The `LaboratoryExaminationsService.CancelUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Laboratory examination's id
   *
   * - `details`: Assistant's id and reason for canceling
   *
   * @return OK
   */
  cancelUsingPATCHResponse(params: LaboratoryExaminationsService.CancelUsingPATCHParams): __Observable<__StrictHttpResponse<LaboratoryExamination>> {
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
   * @param params The `LaboratoryExaminationsService.CancelUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Laboratory examination's id
   *
   * - `details`: Assistant's id and reason for canceling
   *
   * @return OK
   */
  cancelUsingPATCH(params: LaboratoryExaminationsService.CancelUsingPATCHParams): __Observable<LaboratoryExamination> {
    return this.cancelUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as LaboratoryExamination)
    );
  }

  /**
   * @param params The `LaboratoryExaminationsService.FinishUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Laboratory examination's id
   *
   * - `details`: Assistant's id and result of examination
   *
   * @return OK
   */
  finishUsingPATCHResponse(params: LaboratoryExaminationsService.FinishUsingPATCHParams): __Observable<__StrictHttpResponse<LaboratoryExamination>> {
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
   * @param params The `LaboratoryExaminationsService.FinishUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Laboratory examination's id
   *
   * - `details`: Assistant's id and result of examination
   *
   * @return OK
   */
  finishUsingPATCH(params: LaboratoryExaminationsService.FinishUsingPATCHParams): __Observable<LaboratoryExamination> {
    return this.finishUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as LaboratoryExamination)
    );
  }

  /**
   * @param params The `LaboratoryExaminationsService.RejectUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Laboratory examination's id
   *
   * - `details`: Supervisor's id and reason for rejecting
   *
   * @return OK
   */
  rejectUsingPATCHResponse(params: LaboratoryExaminationsService.RejectUsingPATCHParams): __Observable<__StrictHttpResponse<LaboratoryExamination>> {
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
   * @param params The `LaboratoryExaminationsService.RejectUsingPATCHParams` containing the following parameters:
   *
   * - `id`: Laboratory examination's id
   *
   * - `details`: Supervisor's id and reason for rejecting
   *
   * @return OK
   */
  rejectUsingPATCH(params: LaboratoryExaminationsService.RejectUsingPATCHParams): __Observable<LaboratoryExamination> {
    return this.rejectUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as LaboratoryExamination)
    );
  }

  /**
   * @param status Laboratory examination's status
   * @return OK
   */
  getAllLaboratoryExaminationsByStatusUsingGETResponse(status: string): __Observable<__StrictHttpResponse<Array<LaboratoryExamination>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/examinations/${status}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LaboratoryExamination>>;
      })
    );
  }
  /**
   * @param status Laboratory examination's status
   * @return OK
   */
  getAllLaboratoryExaminationsByStatusUsingGET(status: string): __Observable<Array<LaboratoryExamination>> {
    return this.getAllLaboratoryExaminationsByStatusUsingGETResponse(status).pipe(
      __map(_r => _r.body as Array<LaboratoryExamination>)
    );
  }
}

module LaboratoryExaminationsService {

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

export { LaboratoryExaminationsService }
