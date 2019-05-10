/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
import { NewUserDto } from '../models/new-user-dto';

/**
 * User Endpoint
 */
@Injectable({
  providedIn: 'root',
})
class UsersService extends __BaseService {
  static readonly getAllUsersUsingGETPath = '/users';
  static readonly addAdministratorUsingPOSTPath = '/users';
  static readonly getUserDetailsUsingGETPath = '/users/{username}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllUsersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllUsersUsingGET(): __Observable<Array<User>> {
    return this.getAllUsersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * @param newAdministrator New administrator's details
   * @return OK
   */
  addAdministratorUsingPOSTResponse(newAdministrator: NewUserDto): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = newAdministrator;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param newAdministrator New administrator's details
   * @return OK
   */
  addAdministratorUsingPOST(newAdministrator: NewUserDto): __Observable<User> {
    return this.addAdministratorUsingPOSTResponse(newAdministrator).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param username User's username
   * @return OK
   */
  getUserDetailsUsingGETResponse(username: string): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${username}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param username User's username
   * @return OK
   */
  getUserDetailsUsingGET(username: string): __Observable<User> {
    return this.getUserDetailsUsingGETResponse(username).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module UsersService {
}

export { UsersService }
