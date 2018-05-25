import { Injectable } from '@angular/core';
import { HttpOptionsService } from './httpOptions.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class CompetenceGroupService extends HttpOptionsService {
  private addCompetenceGroupURL = `${environment.API_URI}/competenceGroup/add`;
  private editCompetenceGroupURL = `${environment.API_URI}/competenceGroup/edit`;
  private getAllCompetenceGroupsURL = `${environment.API_URI}/competenceGroup/all`;
  private deleteCompetenceGroupURL = `${environment.API_URI}/competenceGroup/delete`;

  constructor(private http: HttpClient) {
    super();
  }

  addcompetenceGroup({ competenceGroupName }) {
    return this.http.post(this.addCompetenceGroupURL, { competenceGroupName }, this.httpOptions);
  }
  editcompetenceGroup({ competenceGroupName, competenceGroupId }) {
    return this.http.post(this.editCompetenceGroupURL, { competenceGroupName, competenceGroupId }, this.httpOptions);
  }
  getAllcompetenceGroups() {
    return this.http.get(this.editCompetenceGroupURL, this.httpOptions);
  }
  deletecompetenceGroup({ competenceGroupId }) {
    return this.http.post(this.editCompetenceGroupURL, { competenceGroupId }, this.httpOptions);
  }
}