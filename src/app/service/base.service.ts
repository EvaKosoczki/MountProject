import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  routerUrl: string = '';
  entity: string = '';
  baseUrl: string = 'http://localhost:3000/api/';

  constructor(protected http: HttpClient) { }

  getUrl(): any {
    let url = `${this.baseUrl}${this.entity}`;
    return url;
  }
  getAll(): Observable<any> {
    let url: string = this.getUrl();
    return this.http.get(url);
  };
  getOne(id: number): Observable<any> {
    let url: string = this.getUrl();
    return this.http.get(`${url}/${id}`)
  };
  editOne(data): Observable<any> {
    let url: string = this.getUrl();
    return this.http.post(`${url}/${data.id}`, data)
  };
  addOne(data): Observable<any> {
    let url: string = this.getUrl();
    return this.http.post(`${url}/new`, data)
  }
  deleteOne(id): Observable<any> {
    let url: string = this.getUrl();
    return this.http.delete(`${url}/${id}`)
  }
}
