import { Position } from './position';

export class User {
  email: string;
  firstName: string;
  lastName: string;
  position: Position;
  _id?: string;
  
  constructor({ email, firstName, lastName, position }) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
  }
}