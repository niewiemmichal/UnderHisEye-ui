/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Doctor } from '../models/doctor';
import { NewUserDto } from '../models/new-user-dto';

/**
 * Doctor Endpoint
 */
@Injectable({
  providedIn: 'root',
})
class DoctorsService extends __BaseService {
  static readonly getAllDoctorsUsingGETPath = '/doctors';
  static readonly addDoctorUsingPOSTPath = '/doctors';
  static readonly getDoctorUsingGETPath = '/doctors/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllDoctorsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Doctor>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/doctors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Doctor>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllDoctorsUsingGET(): __Observable<Array<Doctor>> {
    return this.getAllDoctorsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Doctor>)
    );
  }

  /**
   * @param newDoctor New doctor's details
   * @return OK
   */
  addDoctorUsingPOSTResponse(newDoctor: NewUserDto): __Observable<__StrictHttpResponse<Doctor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = newDoctor;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/doctors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Doctor>;
      })
    );
  }
  /**
   * @param newDoctor New doctor's details
   * @return OK
   */
  addDoctorUsingPOST(newDoctor: NewUserDto): __Observable<Doctor> {
    return this.addDoctorUsingPOSTResponse(newDoctor).pipe(
      __map(_r => _r.body as Doctor)
    );
  }

  /**
   * @param id Doctor's id
   * @return OK
   */
  getDoctorUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Doctor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/doctors/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Doctor>;
      })
    );
  }
  /**
   * @param id Doctor's id
   * @return OK
   */
  getDoctorUsingGET(id: number): __Observable<Doctor> {
    return this.getDoctorUsingGETResponse(id).pipe(
      __map(_r => _r.body as Doctor)
    );
  }
}

module DoctorsService {
}

export { DoctorsService }
