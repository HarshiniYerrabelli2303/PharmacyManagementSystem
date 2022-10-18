import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required ),
    email: new FormControl('', Validators.required) ,
    role: new FormControl('', Validators.required) ,
    

  });
  constructor(private router: Router, private userservice : UsersService) { }

 

  get f() {
    return this.form.controls;
  }
  submit() {
     
     if(!this.form.valid){
      alert("Enter all the feilds"

      )
     }
     else{
      this.userservice.insertUser( this.form)
      
      
     }
     
  }
  ngOnInit(): void {
  }

}
