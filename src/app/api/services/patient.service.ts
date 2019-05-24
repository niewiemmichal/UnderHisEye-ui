/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Patient } from '../models/patient';

/**
 * Patient Endpoint
 */
@Injectable({
  providedIn: 'root',
})
class PatientService extends __BaseService {
  static readonly getAllPatientsUsingGETPath = '/patient';
  static readonly patientUsingPOSTPath = '/patient';
  static readonly getPatientUsingGETPath = '/patient/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllPatientsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Patient>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/patient`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Patient>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllPatientsUsingGET(): __Observable<Array<Patient>> {
    return this.getAllPatientsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Patient>)
    );
  }

  /**
   * @param patient New patient's details
   * @return OK
   */
  patientUsingPOSTResponse(patient: Patient): __Observable<__StrictHttpResponse<Patient>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = patient;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/patient`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Patient>;
      })
    );
  }
  /**
   * @param patient New patient's details
   * @return OK
   */
  patientUsingPOST(patient: Patient): __Observable<Patient> {
    return this.patientUsingPOSTResponse(patient).pipe(
      __map(_r => _r.body as Patient)
    );
  }

  /**
   * @param id Patient's id
   * @return OK
   */
  getPatientUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Patient>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/patient/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Patient>;
      })
    );
  }
  /**
   * @param id Patient's id
   * @return OK
   */
  getPatientUsingGET(id: number): __Observable<Patient> {
    return this.getPatientUsingGETResponse(id).pipe(
      __map(_r => _r.body as Patient)
    );
  }
}

module PatientService {
}

export { PatientService }
