/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LaboratoryAssistant } from '../models/laboratory-assistant';
import { NewUserDto } from '../models/new-user-dto';

/**
 * Laboratory Assistant Endpoint
 */
@Injectable({
  providedIn: 'root',
})
class AssistantsService extends __BaseService {
  static readonly getAllLaboratoryAssistantsUsingGETPath = '/assistants';
  static readonly addLaboratoryAssistantUsingPOSTPath = '/assistants';
  static readonly getLaboratoryAssistantUsingGETPath = '/assistants/u/{username}';
  static readonly getLaboratoryAssistantUsingGET1Path = '/assistants/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllLaboratoryAssistantsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<LaboratoryAssistant>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/assistants`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LaboratoryAssistant>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllLaboratoryAssistantsUsingGET(): __Observable<Array<LaboratoryAssistant>> {
    return this.getAllLaboratoryAssistantsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<LaboratoryAssistant>)
    );
  }

  /**
   * @param newAssistant New laboratory assistant's details
   * @return OK
   */
  addLaboratoryAssistantUsingPOSTResponse(newAssistant: NewUserDto): __Observable<__StrictHttpResponse<LaboratoryAssistant>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = newAssistant;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/assistants`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboratoryAssistant>;
      })
    );
  }
  /**
   * @param newAssistant New laboratory assistant's details
   * @return OK
   */
  addLaboratoryAssistantUsingPOST(newAssistant: NewUserDto): __Observable<LaboratoryAssistant> {
    return this.addLaboratoryAssistantUsingPOSTResponse(newAssistant).pipe(
      __map(_r => _r.body as LaboratoryAssistant)
    );
  }

  /**
   * @param username Laboratory assistant's username
   * @return OK
   */
  getLaboratoryAssistantUsingGETResponse(username: string): __Observable<__StrictHttpResponse<LaboratoryAssistant>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/assistants/u/${username}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboratoryAssistant>;
      })
    );
  }
  /**
   * @param username Laboratory assistant's username
   * @return OK
   */
  getLaboratoryAssistantUsingGET(username: string): __Observable<LaboratoryAssistant> {
    return this.getLaboratoryAssistantUsingGETResponse(username).pipe(
      __map(_r => _r.body as LaboratoryAssistant)
    );
  }

  /**
   * @param id Laboratory assistant's id
   * @return OK
   */
  getLaboratoryAssistantUsingGET1Response(id: number): __Observable<__StrictHttpResponse<LaboratoryAssistant>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/assistants/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboratoryAssistant>;
      })
    );
  }
  /**
   * @param id Laboratory assistant's id
   * @return OK
   */
  getLaboratoryAssistantUsingGET1(id: number): __Observable<LaboratoryAssistant> {
    return this.getLaboratoryAssistantUsingGET1Response(id).pipe(
      __map(_r => _r.body as LaboratoryAssistant)
    );
  }
}

module AssistantsService {
}

export { AssistantsService }
