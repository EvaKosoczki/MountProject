import { Injectable } from '@angular/core';
import { Data } from '../model/data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { User } from '../model/user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MountainsService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
    this.entity='mountains'
   }

  

}
