import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {

  constructor(private userService:UsersService) { }

  ngOnInit() {
  }
  onSubmit(ev: Event) {
    ev.preventDefault;
    this.userService.addOne()
  }
}
