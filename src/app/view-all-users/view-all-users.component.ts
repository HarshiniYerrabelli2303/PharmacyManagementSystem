import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { AuthenticationService } from '../services/authentication.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  users :Users[]=[];
  user :Users ={
    userId: undefined,
    firstName: '',
    lastName: '',
    gender: '',
    phone: '',
    email: '',
    userName: '',
    password: '',
    role: '',
    cart:[]
  }
  constructor(private userService :UsersService, private router : Router,public loginService:AuthenticationService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers(){
    this.userService.getAllUsersList().subscribe(data=>{
      this.users=data;
    })
  }
}
