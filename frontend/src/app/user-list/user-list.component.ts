import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../User';
import { Role } from '../role';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users:User=new User();
role:Role;
content='';
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
