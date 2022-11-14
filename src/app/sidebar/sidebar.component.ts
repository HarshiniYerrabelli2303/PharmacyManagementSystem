import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartserviceService } from '../services/cartservice.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  users:Users=new Users();
  DoctorRole = false;
  AdminRole = false;
  invalidLogin = false
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    public totalItem:number=0;
  constructor(public loginService:AuthenticationService,private cart:CartserviceService,private breakpointObserver: BreakpointObserver,private user:UsersService) {}
  ngOnInit(): void {
    (this.loginService.getAuthStatusListener().subscribe(
      (data:any) => {
        
        var role=sessionStorage.getItem('role')?.toLowerCase()
        if(role=="doctor"){
          
          this.DoctorRole = true;
        
        }
        else if(role == "admin"){
          this.AdminRole = true;
        }
        else{
          alert('userName and password is correct')
        }
          
       
        this.invalidLogin = false
      },
      (error:any) => {
        this.invalidLogin = true

      }
    )
    );
    this.cart.getProducts()
    .subscribe((res:any)=>{
     this.totalItem=res.length;
    })
    this.user.viewProfileByName().subscribe(
      (data:any)=>{
        this.users=data;
      }
    )
  }
 
}
