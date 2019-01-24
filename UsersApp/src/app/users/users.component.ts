import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    new User(1, 'qwerty1', 1992, true, false),
    new User(2, 'qwerty2', 1994, false, true),
    new User(3, 'qwerty3', 1995, true, false),
    new User(4, 'qwerty4', 1996, false, true)
  ];

  constructor() { }

  ngOnInit() {
  }

}
