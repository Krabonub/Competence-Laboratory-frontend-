import { Injectable } from '@angular/core';
import { HttpOptionsService } from './httpOptions.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { CompetenceGroup } from '../models/competenceGroup';

@Injectable()
export class CompetenceGroupService extends HttpOptionsService {
  private addCompetenceGroupURL = `${environment.API_URI}/competenceGroup/add`;
  private editCompetenceGroupURL = `${environment.API_URI}/competenceGroup/edit`;
  private getAllCompetenceGroupsURL = `${environment.API_URI}/competenceGroup/all`;
  private deleteCompetenceGroupURL = `${environment.API_URI}/competenceGroup/delete`;
  private getExceptCompetenceGroupURL = `${environment.API_URI}/competenceGroup/getExcept`;

  constructor(private http: HttpClient) {
    super();
  }

  addCompetenceGroup({ competenceGroupName }): Observable<any> {
    return this.http.post(this.addCompetenceGroupURL, { competenceGroupName }, this.httpOptions);
  }
  editCompetenceGroup({ competenceGroupName, competenceGroupId }): Observable<any> {
    return this.http.post(this.editCompetenceGroupURL, { competenceGroupName, competenceGroupId }, this.httpOptions);
  }
  getAllCompetenceGroups(): Observable<any> {
    return this.http.get(this.getAllCompetenceGroupsURL, this.httpOptions);
  }
  deleteCompetenceGroup({ competenceGroupId }): Observable<any> {
    return this.http.post(this.deleteCompetenceGroupURL, { competenceGroupId }, this.httpOptions);
  }
  getExcept(except: string[]): Observable<any> {
    return this.http.post(this.getExceptCompetenceGroupURL, { except }, this.httpOptions);
  }
}