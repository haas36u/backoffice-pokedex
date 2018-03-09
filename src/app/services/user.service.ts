import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:8080/users';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
	
	getUsers (): Observable<User[]> {
		return this.http.get<User[]>(this.userUrl, this.httpOptions);
  }
}
