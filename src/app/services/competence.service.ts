import { Injectable } from '@angular/core';
import { HttpOptionsService } from './httpOptions.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class CompetenceService extends HttpOptionsService {
  private addCompetenceURL = `${environment.API_URI}/competence/add`;
  private editCompetenceURL = `${environment.API_URI}/competence/edit`;
  private getAllCompetencesURL = `${environment.API_URI}/competence/all`;
  private deleteCompetenceURL = `${environment.API_URI}/competence/delete`;

  constructor(private http: HttpClient) {
    super();
  }

  addcompetence({ competenceName }) {
    return this.http.post(this.addCompetenceURL, { competenceName }, this.httpOptions);
  }
  editcompetence({ competenceName, competenceId }) {
    return this.http.post(this.editCompetenceURL, { competenceName, competenceId }, this.httpOptions);
  }
  getAllcompetences() {
    return this.http.get(this.editCompetenceURL, this.httpOptions);
  }
  deletecompetence({ competenceId }) {
    return this.http.post(this.editCompetenceURL, { competenceId }, this.httpOptions);
  }
}