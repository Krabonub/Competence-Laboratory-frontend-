import { Injectable } from '@angular/core';
import { HttpOptionsService } from './httpOptions.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class EvaluationService extends HttpOptionsService {
  private addEvaluationURL = `${environment.API_URI}/evaluation/add`;
  private editEvaluationURL = `${environment.API_URI}/evaluation/edit`;
  //private getAllEvaluationsURL = `${environment.API_URI}/evaluation/all`;
  //private deleteEvaluationURL = `${environment.API_URI}/evaluation/delete`;
  private getByUsersURL = `${environment.API_URI}/evaluation/getByUsers`;

  constructor(private http: HttpClient) {
    super();
  }

  addevaluation({ evaluationName }) {
    return this.http.post(this.addEvaluationURL, { evaluationName }, this.httpOptions);
  }
  editevaluation({ evaluationName, evaluationId }) {
    return this.http.post(this.editEvaluationURL, { evaluationName, evaluationId }, this.httpOptions);
  }
  /*
  getAllevaluations() {
    return this.http.get(this.getAllEvaluationsURL, this.httpOptions);
  }
  deleteevaluation({ evaluationId }) {
    return this.http.post(this.deleteEvaluationURL, { evaluationId }, this.httpOptions);
  }
  */
  getByUsers(userIdArr: string[]) {
    return this.http.post(this.getByUsersURL, { userIdArr }, this.httpOptions);
  }
}