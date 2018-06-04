import { Injectable } from '@angular/core';
import { HttpOptionsService } from './httpOptions.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class CompetenceService extends HttpOptionsService {
  private addCompetenceURL = `${environment.API_URI}/competence/add`;
  private editCompetenceURL = `${environment.API_URI}/competence/edit`;
  private deleteCompetenceURL = `${environment.API_URI}/competence/delete`;
  private getCompetencesURL = `${environment.API_URI}/competence/select`;

  constructor(private http: HttpClient) {
    super();
  }

  addCompetence({ competenceName, description, competenceGroupId }) {
    return this.http.post(this.addCompetenceURL, { competenceName, description, competenceGroupId }, this.httpOptions);
  }
  editCompetence({ competenceName, description, competenceGroup, competenceId }) {
    return this.http.post(this.editCompetenceURL, { competenceName, description, competenceGroup, competenceId }, this.httpOptions);
  }
  getCompetencesByGroup({ query }) {
    return this.http.post(this.getCompetencesURL, { query }, this.httpOptions);
  }
  deleteCompetence({ competenceId }) {
    return this.http.post(this.deleteCompetenceURL, { competenceId }, this.httpOptions);
  }
}