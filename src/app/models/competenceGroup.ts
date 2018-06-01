import { Competence } from './competence'

export class CompetenceGroup {
  _id: string;
  competenceGroupName: string;
  competences: (string | Competence)[];
}