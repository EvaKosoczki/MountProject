import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MountainsService } from 'src/app/service/mountains.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  id: number = 0;
  oneData: {} = { a: 1 }

  constructor(private MountainsService: MountainsService,
    private ar: ActivatedRoute) {
    this.ar.params.forEach(
      params => {
        this.id = params.id
        this.MountainsService.getOne(this.id).subscribe(
          data => this.oneData = data
        )
      }
    )

  }

  ngOnInit() {
  }

}
