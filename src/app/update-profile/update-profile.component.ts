import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
userId :number=0;
users : Users=new Users();

  constructor( private activatedRoute: ActivatedRoute,
    private router : Router,
    private userService:UsersService) { }

  ngOnInit(): void {
   this.userId=this.activatedRoute.snapshot.params['userId']
    this.userService.viewProfileById(this.userId).subscribe(data=>{
      console.log(data);
      this.users=data;
   },error =>console.log(error));
    
  }

  onSubmit(){
    console.log(this.users);

    this.userService. updateProfile(this.userId,this.users).subscribe(data=>{
      this.goToHomePage();
    },
    error=>console.log(error));
  }

  goToHomePage(){
    this.router.navigate(['/doctorhome'])
  }
}
