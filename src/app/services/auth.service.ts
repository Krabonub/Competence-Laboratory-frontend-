import { Injectable } from '@angular/core';
import { HttpOptionsService } from './httpOptions.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService extends HttpOptionsService {
  private logInURL = `${environment.API_URI}/auth/login`;
  private logOutURL = `${environment.API_URI}/auth/logout`;

  constructor(private http: HttpClient) {
    super();
  }

  logIn({ email, password }) {
    return this.http.post(this.logInURL, { email, password }, this.httpOptions);
  }

  logOut() {
    return this.http.get(this.logOutURL, this.httpOptions);
  }
}