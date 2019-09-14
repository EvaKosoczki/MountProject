import { Component, OnInit } from '@angular/core';
import { Data } from './../../model/data';
import { MountainsService } from './../../service/mountains.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mountain-data',
  templateUrl: './mountain-data.component.html',
  styleUrls: ['./mountain-data.component.css']
})
export class MountainDataComponent implements OnInit {
  title = 'MountProject';
  mountainData$: Observable<any> = this.MountainsService.getAll()
  searchText: string = '';

  constructor(private MountainsService: MountainsService) { }

  ngOnInit() {

  }
}
