import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { LoginResponse } from '../models/login-response';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private url = 'http://localhost:60252/api/';

    constructor(private http: HttpClient) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            const h = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken);
            req = req.clone({ headers: h });
        }
        return next.handle(req).pipe(catchError(
            (err) => {
                if (err.status === 401) {
                    const refreshToken = localStorage.getItem('refreshToken');
                    if (refreshToken) {
                        this.http.post<LoginResponse>(`${this.url}account/token`, { refreshToken: refreshToken} ).subscribe(
                            (result) => {
                                console.log(result);
                            },
                            (error) => {
                                console.log(error);
                            }
                        );
                    }
                }
                throw err;
            }
        ));
    }
}
