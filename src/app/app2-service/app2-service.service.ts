import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class App2ServiceService {
  constructor() {}

  public returnSomething() {
    console.log('something');
    return ['1', '2', '3', '4', '5'];
  }
}
