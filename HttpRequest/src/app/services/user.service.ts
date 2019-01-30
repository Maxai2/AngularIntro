import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}users`).pipe(map((data) => {
      const res: User[] = [];
      data.forEach((el) => {
        res.push(new User(el['id'], el['name'], el['email']));
      });
      return res;
    }));
  }

  getUserToDos(userId: number): Observable<Todo[]> {
    // return this.http.get<Todo[]>(`${this.url}todos?userId=${userId}`);
    // const p = new HttpParams().set('userId', userId.toString());

    let p = new HttpParams();
    p = p.set('userId', userId.toString());
    return this.http.get<Todo[]>(`${this.url}todos`, { params: p });
  }

  updateToDo(todo: Todo) {
    return this.http.put(`${this.url}todos/${todo.id}`, JSON.stringify(todo));
  }
}
