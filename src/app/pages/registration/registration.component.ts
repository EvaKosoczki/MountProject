import { Component, OnInit } from '@angular/core';
import { MountainsService } from 'src/app/service/mountains.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  data: User = new User()
  constructor(private MountainsService: MountainsService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(ev: Event) {
    ev.preventDefault();
    this.MountainsService.newUser(this.data).subscribe(
      result => console.log("Sikeres"),
      err => console.error(err)
    )
  }
}
