import { Injectable } from '@angular/core';
import { HttpOptionsService } from './httpOptions.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService extends HttpOptionsService {
  private addUserURL = `${environment.API_URI}/user/add`;
  private editUserURL = `${environment.API_URI}/user/edit`;
  private getAllUsersURL = `${environment.API_URI}/user/all`;
  private deleteUserURL = `${environment.API_URI}/user/delete`;
  private getUsersByQueryURL = `${environment.API_URI}/user/getByQuery`;

  constructor(private http: HttpClient) {
    super();
  }

  adduser({ firstName, lastName, email, position }): Observable<any> {
    return this.http.post(this.addUserURL, { firstName, lastName, email, position }, this.httpOptions);
  }
  edituser({ firstName, lastName, email, position, userId }): Observable<any> {
    return this.http.post(this.editUserURL, { firstName, lastName, email, position, userId }, this.httpOptions);
  }
  getAllusers(): Observable<any> {
    return this.http.get(this.getAllUsersURL, this.httpOptions);
  }
  deleteuser({ userId }): Observable<any> {
    return this.http.post(this.deleteUserURL, { userId }, this.httpOptions);
  }
  getUsersByQuery(query) {
    return this.http.post(this.getUsersByQueryURL, query, this.httpOptions);
  }
}