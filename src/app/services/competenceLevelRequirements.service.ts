import { Injectable } from '@angular/core';
import { HttpOptionsService } from './httpOptions.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

export class editRequirement {
  _id: string;
  mark: number;
}

@Injectable()
export class CompetenceLevelRequirementService extends HttpOptionsService {
  private getRequirementsURL = `${environment.API_URI}/requirement/get`;
  private editRequirementsURL = `${environment.API_URI}/requirement/edit`;

  constructor(private http: HttpClient) {
    super();
  }
  getRequirements({ positionId }): Observable<any> {
    return this.http.post(this.getRequirementsURL, { positionId }, this.httpOptions);
  }
  editRequirements(editRequirementsArray: editRequirement[]): Observable<any> {
    return this.http.post(this.editRequirementsURL, editRequirementsArray, this.httpOptions);
  }
}