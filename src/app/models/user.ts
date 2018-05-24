export class User {
  email: string;
  firstName: string;
  lastName: string;
  position: string;
  constructor({ email, firstName, lastName, position }) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
  }
}