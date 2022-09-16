import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor( private httpClient: HttpClient) { }

  payment(){
     return this.httpClient.post('http://localhost:8080//api/v1/paymentGateway/initiateTransactions', body, { headers: headers });
  }
}
