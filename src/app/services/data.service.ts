import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
title: String

constructor() {
}

isLoggedIn(): boolean {
    return true;
}

getTitle() {
  this.title = 'yum'
  return this.title
}
}
