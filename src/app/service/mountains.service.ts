import { Injectable } from '@angular/core';
import { Data } from '../model/data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MountainsService {
  dataURL: string = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getAll(): Observable<Data[]> {
    return this.http.get<Data[]>(this.dataURL)
  }
  getOne(id: number): Observable<any> {
    return this.http.get<any>(`${this.dataURL}/${id}`)
  }
}
