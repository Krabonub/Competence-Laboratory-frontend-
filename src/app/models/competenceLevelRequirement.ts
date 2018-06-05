import { Level } from './level';
import { Competence } from './competence';
import { Position } from './position';

export class CompetenceLevelRequirement {
  _id: string;
  position: string //| Position;
  level: string //| Level;
  competence: string //| Competence;
  mark: number;
}