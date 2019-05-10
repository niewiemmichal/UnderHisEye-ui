/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Registrant } from '../models/registrant';
import { NewUserDto } from '../models/new-user-dto';

/**
 * Registrant Endpoint
 */
@Injectable({
  providedIn: 'root',
})
class RegistrantsService extends __BaseService {
  static readonly getAllPatientRegistrationSpecialistsUsingGETPath = '/registrants';
  static readonly addPatientRegistrationSpecialistUsingPOSTPath = '/registrants';
  static readonly getPatientRegistrationSpecialistUsingGETPath = '/registrants/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllPatientRegistrationSpecialistsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Registrant>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/registrants`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Registrant>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllPatientRegistrationSpecialistsUsingGET(): __Observable<Array<Registrant>> {
    return this.getAllPatientRegistrationSpecialistsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Registrant>)
    );
  }

  /**
   * @param newRegistrant New registrant's details
   * @return OK
   */
  addPatientRegistrationSpecialistUsingPOSTResponse(newRegistrant: NewUserDto): __Observable<__StrictHttpResponse<Registrant>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = newRegistrant;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/registrants`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Registrant>;
      })
    );
  }
  /**
   * @param newRegistrant New registrant's details
   * @return OK
   */
  addPatientRegistrationSpecialistUsingPOST(newRegistrant: NewUserDto): __Observable<Registrant> {
    return this.addPatientRegistrationSpecialistUsingPOSTResponse(newRegistrant).pipe(
      __map(_r => _r.body as Registrant)
    );
  }

  /**
   * @param id Registrant's id
   * @return OK
   */
  getPatientRegistrationSpecialistUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Registrant>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/registrants/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Registrant>;
      })
    );
  }
  /**
   * @param id Registrant's id
   * @return OK
   */
  getPatientRegistrationSpecialistUsingGET(id: number): __Observable<Registrant> {
    return this.getPatientRegistrationSpecialistUsingGETResponse(id).pipe(
      __map(_r => _r.body as Registrant)
    );
  }
}

module RegistrantsService {
}

export { RegistrantsService }
