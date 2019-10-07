import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from './../../service/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  id: number = 0;
  allUsers$: Observable<any> = this.UserService.getAll();

  constructor(private UserService: UsersService,
    private ar: ActivatedRoute) {
  }

  ngOnInit() {
  }
  //Behavior subject-et itt használni !!!
  onClick(id: number) {
    this.UserService.deleteOne(id).subscribe(
      response => console.log('sikeres')
    )
  }
}
