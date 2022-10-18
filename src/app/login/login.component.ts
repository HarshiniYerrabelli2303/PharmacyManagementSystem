import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = ''
  password = ''
  // role=''
  invalidLogin = false

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required), 
    // role: new FormControl('', Validators.required) 
  });

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }
  get f() {
    return this.form.controls;
  }
  
  checkLogin() {
    (this.loginservice.authenticate(this.userName, this.password).subscribe(
      (data:any) => {
        // var role=sessionStorage.getItem('role')?.toLowerCase()
        // if(role=="doctor"){
          
        //   this.router.navigate(['doctorhome'])
        
        // }
        // else if(role == 'admin'){
        //   this.router.navigate(['adminhome'])
        // }
        // else{
        //   alert('userName and password is correct')
        // }
          
       
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }

}