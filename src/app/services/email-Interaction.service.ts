import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class EmailInteractionService{

  constructor(private http: HttpClient) {}
  httpGet(url: string) {
    return this.http.get(url);
  }

  httpPost(url: string, {}: any) {
    return this.http.post(url, { name: "Email Server" });
  }

  sendEmail(url: string, data: { name: string; email: string; price: string; quantity: string; quantityNumber: any; }) {
    return this.http.post(url, data);
  }

  expiredDialog(){

  }

}
