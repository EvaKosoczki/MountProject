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
  constructor(private mountainsService: MountainsService, private ar: ActivatedRoute) {
    this.ar.params.forEach(params => {
      this.MountainId = params.id;
      this.mountainsService.getOne(this.MountainId).subscribe(
        datas => {
          this.OneMountain = datas
        },
        err => { console.error(JSON.stringify(err)) }
      )
    })
  }

  ngOnInit() {
  }

}
