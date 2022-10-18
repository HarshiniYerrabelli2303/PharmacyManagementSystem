import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {

  }



  getMessage() {
    let token = sessionStorage.getItem('token')
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });
    const headers = new HttpHeaders({ Authorization:`Bearer${token}` });
    return this.httpClient.get('http://localhost:8084/users/message', { headers, responseType: 'text' });
  }
}