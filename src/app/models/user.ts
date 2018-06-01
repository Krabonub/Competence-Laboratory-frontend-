import { Position } from './position';
import { Level } from './level';

export class User {
  email: string;
  firstName: string;
  lastName: string;
  position: Position;
  level?: Level;
  _id?: string;

  constructor({ email, firstName, lastName, position }) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
  }
}