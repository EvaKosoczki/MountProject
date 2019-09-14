import { Injectable } from '@angular/core';
import { Data } from '../model/data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class MountainsService {
  dataURL: string = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getAll(): Observable<Data[]> {
    return this.http.get<Data[]>(this.dataURL)
  };
  getOneUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.dataURL}/${id}`)
  };
  editUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.dataURL}/${user.id}`, user)
  };
  newUser(newuser: User): Observable<User> {
    return this.http.post<User>(`${this.dataURL}/new`, newuser)
  }

}
