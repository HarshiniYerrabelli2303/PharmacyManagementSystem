import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token : any;
  private tokenTimer : any;
  isAuthenticated = false;
  private authStatusListener  = new Subject<boolean>();
  
  constructor(
    private httpClient: HttpClient,private router:Router
  ) {
  }
  getIsAuth(){
    return this.isAuthenticated;
  }
  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  authenticate(userName : any  , password : any) {
  
    var body = JSON.stringify({ "userName": userName , "password": password})
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post('http://localhost:8084/users/login', body, { headers: headers, responseType: 'text' }).pipe(
      map(
        userData => {
          sessionStorage.setItem('userName', userName);
          sessionStorage.setItem('password', password);
          var role=userData.split("USERTYPE")
       
          sessionStorage.setItem('role', role[1]);
          sessionStorage.setItem('token', 'Bearer ' );
         
          
          
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          console.log(userName)
          console.log(role[0])
          console.log(role[1])
          
          console.log(sessionStorage.getItem('token'))
          this.router.navigate(['/']);
          return userData;
          
        }
      )

    );
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('userName')
     console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('userName')
    sessionStorage.removeItem('password')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('authority')
    sessionStorage.removeItem('userId')
     sessionStorage.removeItem('token')
  }
  autoAuthUser(){
    const authInformation = this.getAuthData();
    if(!authInformation){
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    console.log(authInformation,expiresIn)
    if(expiresIn > 0){
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn /1000);
      this.authStatusListener.next(true);
    }
  }
  private getAuthData(){
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if(!token || !expirationDate){
      return;
    }
    return{
      token: token,
      expirationDate : new Date(expirationDate)
    }
  }
  private setAuthTimer(duration : number){
    console.log("setting timer " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logOut();
    }, duration * 1000);
  }
}
