import { Component, OnInit } from '@angular/core';
import { MountainsService } from 'src/app/service/mountains.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-editprofil',
  templateUrl: './editprofil.component.html',
  styleUrls: ['./editprofil.component.css']
})
export class EditprofilComponent implements OnInit {
  id: number = 0;
  data: User = new User();

  constructor(private MountainsService: MountainsService,
    private ar: ActivatedRoute,
    private router: Router) {
    this.ar.params.forEach(params => {
      this.id = params.id
      this.MountainsService.getOneUser(this.id).subscribe(
        data => this.data = data
      )
    }

    )

  }
  onSubmit(ev: Event) {
    ev.preventDefault();
    this.MountainsService.editUser(this.data[0]).subscribe(
      response => {
        console.log("Sikeres");
        this.router.navigateByUrl(`/mypage/profil/${this.id}`)

      },
      err => {
        console.error(err)
      }
    )
  }
  ngOnInit() {
  }

}
