import { Level } from './level';
import { Competence } from './competence';

export class CompetenceLevelRequirement {
  level: string | Level;
  competence: string | Competence;
  mark: number;
}