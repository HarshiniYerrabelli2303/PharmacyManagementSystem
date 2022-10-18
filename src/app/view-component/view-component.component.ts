import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
// userId:number=0;
// userName : string='';
users:any={
  userId: undefined,
  firstName: '',
  lastName: '',
  gender: '',
  phone: '',
  email: '',
  userName: '',
  password: '',
  role: ''
}



  constructor(private userservice: UsersService,
    private activatedRoute: ActivatedRoute,
    private loginservice:AuthenticationService, 
  private router : Router){}
 ngOnInit(): void {
  this.userservice.viewProfileByName().subscribe((data:any)=>{
    this.users=data;
  },(error: any)=>console.log(error));
 }




 
updateProfile(userId:number,firstName:string,lastName:string,gender:string,email:string,phone:string,userName:string,role:string){
    this.users.userId=userId
    this.users.firstName=firstName
    this.users.lastName=lastName
    this.users.email=email
    this.users.gender=gender
    this.users.phone=phone
    this.users.userName=userName
    this.users.role=role
    this.router.navigate(['update',userId]);
    }
    delete(userId :number){
      this.userservice.deleteUser(userId).subscribe(data =>{
       console.log(data);
       this.goToLogoutPage();
        
      })
    }

    goToLogoutPage(){
      this.router.navigate(['/logout'])
    }

}
