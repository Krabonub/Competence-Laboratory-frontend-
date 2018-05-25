import { Injectable } from '@angular/core';

@Injectable()
export class HttpOptionsService {
  protected httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  }
}