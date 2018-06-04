import { Level } from './level';
import { Competence } from './competence';
import { Position } from './position';

export class CompetenceLevelRequirement {
  position: string //| Position;
  level: string //| Level;
  competence: string //| Competence;
  mark: number;
}