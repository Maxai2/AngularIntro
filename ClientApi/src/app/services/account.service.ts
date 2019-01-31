import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../models/login-response';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CustomAccount } from '../models/account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:60252/api/account/';

  constructor(public http: HttpClient) { }

  isAuth() {
    return localStorage.getItem('accessToken') != null;
  }

  login(login: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.url}login`, { login: login, password: password }).pipe(tap((result) => { // tap like action by c# nothing return
      localStorage.setItem('accessToken', result.accessToken);
      localStorage.setItem('refreshToken', result.refreshToken);
    }));
  }

  logout() {
    // const h = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
    this.http.get(`${this.url}logout`);
    localStorage.clear();
  }

  getAccount(): Observable<CustomAccount> {
    // const h = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
    return this.http.get<CustomAccount>(`${this.url}`);
  }
}
