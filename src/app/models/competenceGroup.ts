export class CompetenceGroup {
  competenceGroupName: string;
  _id?: string;

  constructor({ competenceGroupName }) {
    this.competenceGroupName = competenceGroupName;
  }
}