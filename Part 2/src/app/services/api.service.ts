import { IUser } from '../userInterface';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  private _url:string = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  loadUsers():Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }

  addUsers(user:any) {
    return this.http.post(this._url, user);
  }

  deleteUsers(user: any) {
    return this.http.delete(this._url + user);
  }
}
