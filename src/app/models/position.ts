import { CompetenceGroup } from './competenceGroup';

export class Position {
  _id?: string;
  positionName: string;
  competenceGroups: CompetenceGroup[];
}