import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  //private url = 'http://localhost:8080/api/login';
  private url = 'http://localhost:8080/api/test';

  constructor(private http: HttpClient) { }

 

  getLogin(login: Object): Observable<Object>{
    return this.http.post(`${this.url}`, login);
  }

  getTest(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  
}

