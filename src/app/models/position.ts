export class Position {
  positionName: string;
  _id?: string;
  
  constructor({ positionName }) {
    this.positionName = positionName;
  }
}