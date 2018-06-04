import { Injectable } from '@angular/core';
import { HttpOptionsService } from './httpOptions.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

@Injectable()
export class LevelService extends HttpOptionsService {
  private getAllLevelsURL = `${environment.API_URI}/level/all`;

  constructor(private http: HttpClient) {
    super();
  }
  getAllLevels(): Observable<any> {
    return this.http.get(this.getAllLevelsURL, this.httpOptions);
  }
}