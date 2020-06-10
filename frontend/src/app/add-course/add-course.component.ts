import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { course } from '../Course';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
course:course=new course;
message:string;
id:number;
submitted=false;
  constructor(private userService:UserService,
    private route:ActivatedRoute,
    private router:Router,
    private token:TokenStorageService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    

  }
  reloaddata(){

    this.userService.addcourse(this.id,this.course)
    .subscribe( data => {
      this.message=data;
    });
  }
  onSubmit(){
    this.submitted=true;
    this.reloaddata();
  }

}
