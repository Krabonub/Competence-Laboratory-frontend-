import { Injectable } from '@angular/core';
import { HttpOptionsService } from './httpOptions.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class LevelService extends HttpOptionsService {
  private getAllLevelsURL = `${environment.API_URI}/level/all`;

  constructor(private http: HttpClient) {
    super();
  }
  getAllLevels() {
    return this.http.get(this.getAllLevelsURL, this.httpOptions);
  }
}