import { CompetenceGroup } from './competenceGroup';
import { Competence } from './competence';
import { CompetenceLevelRequirement } from './competenceLevelRequirement';

export class LevelRequirementsCompetence {
  competence: Competence | string;
  competenceLevelRequirements: (CompetenceLevelRequirement | string)[];
}

export class LevelRequirementsCompetenceGroup {
  competenceGroup: CompetenceGroup | string;
  levelRequirementsCompetences: LevelRequirementsCompetence[];
}

export class Position {
  positionName: string;
  levelRequirementsCompetenceGroups: LevelRequirementsCompetenceGroup[];
  _id?: string;

  static getPositionGroups(position: Position) {
    return position.levelRequirementsCompetenceGroups.map((group: LevelRequirementsCompetenceGroup) => {
      return group.competenceGroup;
    });
  }
}