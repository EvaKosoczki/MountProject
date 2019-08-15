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
      incomingData => {
        this.mountainData = incomingData,
          console.log(this.mountainData)
      },
      err => console.error(err)
    )
  }
  
}
