import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  content: any;
  currentUser:any;

  constructor(private userService: UserService,private router:Router,private token:TokenStorageService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

addcourse(id:number){
this.router.navigate(['addcourse',id]);
  }
}
