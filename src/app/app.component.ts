import { Component } from '@angular/core';
import { Data } from './model/data';
import { MountainsService } from './service/mountains.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MountProject';
  mountainData: Data[] = [];
  tableHead: string[] = [];
  constructor(private MountainsService: MountainsService) { }
  ngOnInit() {
    this.MountainsService.getAll().subscribe(
      incomingData => this.mountainData = incomingData,
      err => console.error(err)
    )
  }
  createTableHead() {
    this.tableHead = Object.keys(this.mountainData[0]);
    console.log(this.tableHead)
  }
}
