import { Injectable } from '@angular/core';
import { Data } from '../model/data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MountainsService {
  jsonURL: string = 'http://localhost:3210/api/alps'
  constructor(private http: HttpClient) { }

  getAll(): Observable<Data[]> {
    return this.http.get<Data[]>(this.jsonURL)
  }
  getOne(id): Observable<Data> {
    return this.http.get<Data>(`${this.jsonURL}/${id}`)
  }
}
