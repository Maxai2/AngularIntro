import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  users: User[] = [
    new User(1, 'qwerty1', 1992, true, false),
    new User(2, 'qwerty2', 1994, false, true),
    new User(3, 'qwerty3', 1995, true, false),
    new User(4, 'qwerty4', 1996, false, true)
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  hasName(name: string) {
    return (this.users.find(function(u) { return u.name === name; }) ? true : false);
  }
}
