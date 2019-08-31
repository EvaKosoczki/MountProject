import { Component, OnInit } from '@angular/core';
import { MountainsService } from 'src/app/service/mountains.service';
import { ActivatedRoute } from '@angular/router';
import { Data } from './../../model/data'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  MountainId: number;
  OneMountain: Data;
  lat: string;
  lng: string;
  splittedCoord: string[];

  constructor(private mountainsService: MountainsService, private ar: ActivatedRoute) {
    this.ar.params.forEach(params => {
      this.MountainId = params.id;
      this.mountainsService.getOne(this.MountainId).subscribe(
        datas => {
          this.OneMountain = datas;
          this.splittedCoord = this.OneMountain.Coordinates.split(" ");
          this.lat = this.splittedCoord[3].slice(0, 9);
          this.lng = this.splittedCoord[4].slice(0, 7);
          console.log(this.lat)
          console.log(this.lng)
        },
        err => { console.error(JSON.stringify(err)) }
      )
    })
  }

  ngOnInit() {
  }

}
