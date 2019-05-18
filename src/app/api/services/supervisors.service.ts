/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LaboratorySupervisor } from '../models/laboratory-supervisor';
import { NewUserDto } from '../models/new-user-dto';

/**
 * Laboratory Supervisor Endpoint
 */
@Injectable({
  providedIn: 'root',
})
class SupervisorsService extends __BaseService {
  static readonly getAllLaboratorySupervisorsUsingGETPath = '/supervisors';
  static readonly addLaboratorySupervisorUsingPOSTPath = '/supervisors';
  static readonly getLaboratorySupervisorUsingGETPath = '/supervisors/u/{username}';
  static readonly getLaboratorySupervisorUsingGET1Path = '/supervisors/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllLaboratorySupervisorsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<LaboratorySupervisor>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/supervisors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LaboratorySupervisor>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllLaboratorySupervisorsUsingGET(): __Observable<Array<LaboratorySupervisor>> {
    return this.getAllLaboratorySupervisorsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<LaboratorySupervisor>)
    );
  }

  /**
   * @param newSupervisor New laboratory supervisor's details
   * @return OK
   */
  addLaboratorySupervisorUsingPOSTResponse(newSupervisor: NewUserDto): __Observable<__StrictHttpResponse<LaboratorySupervisor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = newSupervisor;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/supervisors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboratorySupervisor>;
      })
    );
  }
  /**
   * @param newSupervisor New laboratory supervisor's details
   * @return OK
   */
  addLaboratorySupervisorUsingPOST(newSupervisor: NewUserDto): __Observable<LaboratorySupervisor> {
    return this.addLaboratorySupervisorUsingPOSTResponse(newSupervisor).pipe(
      __map(_r => _r.body as LaboratorySupervisor)
    );
  }

  /**
   * @param username Laboratory supervisor's username
   * @return OK
   */
  getLaboratorySupervisorUsingGETResponse(username: string): __Observable<__StrictHttpResponse<LaboratorySupervisor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/supervisors/u/${username}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboratorySupervisor>;
      })
    );
  }
  /**
   * @param username Laboratory supervisor's username
   * @return OK
   */
  getLaboratorySupervisorUsingGET(username: string): __Observable<LaboratorySupervisor> {
    return this.getLaboratorySupervisorUsingGETResponse(username).pipe(
      __map(_r => _r.body as LaboratorySupervisor)
    );
  }

  /**
   * @param id Laboratory supervisor's id
   * @return OK
   */
  getLaboratorySupervisorUsingGET1Response(id: number): __Observable<__StrictHttpResponse<LaboratorySupervisor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/supervisors/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboratorySupervisor>;
      })
    );
  }
  /**
   * @param id Laboratory supervisor's id
   * @return OK
   */
  getLaboratorySupervisorUsingGET1(id: number): __Observable<LaboratorySupervisor> {
    return this.getLaboratorySupervisorUsingGET1Response(id).pipe(
      __map(_r => _r.body as LaboratorySupervisor)
    );
  }
}

module SupervisorsService {
}

export { SupervisorsService }
