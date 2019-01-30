import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];
  todos: Todo[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (result: User[]) => {
        this.users = result;
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTodos(userId: number) {
    this.userService.getUserToDos(userId).subscribe(
      (data) => {
        this.todos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkedChange(todo: Todo) {
    todo.completed = !todo.completed;
    this.userService.updateToDo(todo).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
