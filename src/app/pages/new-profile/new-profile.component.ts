import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {
  data: User = new User();
  constructor(private userService: UsersService) { }

  ngOnInit() {
  }
  onSubmit(ev: Event) {
    ev.preventDefault;
    this.userService.addOne(this.data)
  }
}
