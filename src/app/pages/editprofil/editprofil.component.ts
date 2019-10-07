import { Component, OnInit } from '@angular/core';
import { MountainsService } from 'src/app/service/mountains.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-editprofil',
  templateUrl: './editprofil.component.html',
  styleUrls: ['./editprofil.component.css']
})
export class EditprofilComponent implements OnInit {
  id: number = 0;
  data: User = new User();

  constructor(private userService: UsersService,
    private ar: ActivatedRoute,
    private router: Router) {
    this.ar.params.forEach(params => {
      this.id = params.id
      this.userService.getOne(this.id).subscribe(
        data => {
          this.data = data
          console.log(data)
        }
      )
    }

    )

  }
  onSubmit(ev: Event) {
    ev.preventDefault();
    this.userService.editOne(this.data[0]).subscribe(
      response => {
        console.log("Sikeres");
        this.router.navigateByUrl(`/mypage/profil`)

      },
      err => {
        console.error(err)
      }
    )
  }
  ngOnInit() {
  }

}
