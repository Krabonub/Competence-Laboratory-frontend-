export class Competence {
  competenceName: string;
  competenceGroup: string;
  _id?: string;

  constructor({ competenceName, competenceGroup }) {
    this.competenceName = competenceName;
    this.competenceGroup = competenceGroup;
  }
}