import { Injectable } from '@angular/core';
import { HttpOptionsService } from './httpOptions.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PositionService extends HttpOptionsService {
  private addPositionURL = `${environment.API_URI}/position/add`;
  private editPositionURL = `${environment.API_URI}/position/edit`;
  private getAllPositionsURL = `${environment.API_URI}/position/all`;
  private deletePositionURL = `${environment.API_URI}/position/delete`;
  private addCompetenceGroupURL = `${environment.API_URI}/position/addCompetenceGroup`;
  private deleteCompetenceGroupURL = `${environment.API_URI}/position/deleteCompetenceGroup`;

  constructor(private http: HttpClient) {
    super();
  }

  addPosition({ positionName }): Observable<any> {
    return this.http.post(this.addPositionURL, { positionName }, this.httpOptions);
  }
  editPosition({ positionName, positionId }): Observable<any> {
    return this.http.post(this.editPositionURL, { positionName, positionId }, this.httpOptions);
  }
  getAllPositions(): Observable<any> {
    return this.http.get(this.getAllPositionsURL, this.httpOptions);
  }
  deletePosition({ positionId }): Observable<any> {
    return this.http.post(this.deletePositionURL, { positionId }, this.httpOptions);
  }
  addCompetenceGroup({ positionId, competenceGroupId }): Observable<any> {
    return this.http.post(this.addCompetenceGroupURL, { positionId, competenceGroupId }, this.httpOptions);
  }
  deleteCompetenceGroup({ positionId, competenceGroupId }): Observable<any> {
    return this.http.post(this.deleteCompetenceGroupURL, { positionId, competenceGroupId }, this.httpOptions);
  }
}