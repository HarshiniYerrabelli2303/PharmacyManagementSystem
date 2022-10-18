import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from '../models/users';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
private viewProfile="http://localhost:8084/users/viewProfile";
private viewAll="http://localhost:8084/users/viewAll"; 
private update="http://localhost:8084/users/updateProfile";
private delete="http://localhost:8084/users/deleteUser"

constructor(private httpClient: HttpClient,private router:Router) { }

  insertUser(formData:any){
    const headers = new HttpHeaders({
      //      'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
     // Authorization: `${sessionStorage.getItem('token')}`
    });

    var body = JSON.stringify({ "firstName": formData.get('firstName').value,"lastName": formData.get('lastName').value, "phone": formData.get('phone').value,
    "gender": formData.get('gender').value,"userName": formData.get('userName').value,
    "password": formData.get('password').value,"email": formData.get('email').value ,"role": formData.get('role').value})
    
    this.httpClient.post('http://localhost:8084/users/register', body, { headers: headers }).subscribe(
      (      response: any) => {
        console.log(response);
        confirm('Confirm Submit')
        alert('Record inserted successfully')
        this.router.navigate(['login']);
      },
      error => {
        alert('userName already exist')
        console.log(error);
      });
      
    }
    


public viewProfileByName(){

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });
  return this.httpClient.get('http://localhost:8084/users/view/'+ sessionStorage.getItem('userName'), { headers: headers });
    
  
}
viewProfileById(userId : number):Observable<Users>{
  return this.httpClient.get<Users>(`${this.viewProfile}/${userId}`);
}
  getAllUsersList():Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.viewAll}`);
  }

  updateProfile(userId : number,user :Users):Observable<Object>{
    return  this.httpClient.put(`${this.update}/${userId}`, user);
  }

  deleteUser(userId : number): Observable<Object>{
    alert('Your Account will be Deleted Permanently');
    return this.httpClient.delete(`${this.delete}/${userId}`);
  }
}
