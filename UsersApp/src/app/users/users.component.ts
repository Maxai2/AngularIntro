import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.users = this.peopleService.getUsers();
  }

}
