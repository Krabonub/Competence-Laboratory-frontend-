import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LocalStorageService {
  public userEmail: string;
  public userFirstName: string;
  public userLastName: string;
  public userPosition: string;

  constructor() {
    this.userEmail = localStorage.getItem("userEmail");
    this.userFirstName = localStorage.getItem("userFirstName");
    this.userLastName = localStorage.getItem("userLastName");
    this.userPosition = localStorage.getItem("userPosition");
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}