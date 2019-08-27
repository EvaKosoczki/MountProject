import { Component, OnInit } from '@angular/core';
import { Data } from './../../model/data';
import { MountainsService } from './../../service/mountains.service'

@Component({
  selector: 'app-mountain-data',
  templateUrl: './mountain-data.component.html',
  styleUrls: ['./mountain-data.component.css']
})
export class MountainDataComponent implements OnInit {
  title = 'MountProject';
  mountainData: Data[] = [];
  tableHead: string[] = [];

  constructor(private MountainsService: MountainsService) { }

  ngOnInit() {
    this.MountainsService.getAll().subscribe(
      incomingData => {
        this.mountainData = incomingData,
          console.log(this.mountainData)
      },
      err => console.error(err)
    )
  }
}
