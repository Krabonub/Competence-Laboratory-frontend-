import { Injectable } from '@angular/core';

@Injectable()
export class CommonHttpService {
  protected httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  }
}