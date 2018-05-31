export class Level {
  levelName: string;
  levelIndex: number;
  _id?: string;

  constructor({ levelName, levelIndex }) {
    this.levelName = levelName;
    this.levelIndex = levelIndex;
  }
}