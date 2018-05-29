import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../models/user';

@Injectable()
export class LocalStorageService {
  public user$: BehaviorSubject<User>;

  constructor() {
    this.user$ = new BehaviorSubject(
      new User(
        {
          email: localStorage.getItem("userEmail"),
          firstName: localStorage.getItem("userFirstName"),
          lastName: localStorage.getItem("userLastName"),
          position: localStorage.getItem("userPosition")
        }
      )
    );
    /*setInterval(() => {
      console.log(this.user$);
    }, 2000);*/
  }

  clearLocalStorage() {
    localStorage.clear();
    this.user$.next(null);
  }

  setUserToLocalstorage({ email, firstName, lastName, position }: User) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userFirstName", firstName);
    localStorage.setItem("userLastName", lastName);
    localStorage.setItem("userPosition", position.positionName);
    this.user$.next(
      new User(
        {
          email: localStorage.getItem("userEmail"),
          firstName: localStorage.getItem("userFirstName"),
          lastName: localStorage.getItem("userLastName"),
          position: localStorage.getItem("userPosition")
        }
      )
    );
  }
}