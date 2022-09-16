import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

 pay(data:any){
  const headers = new HttpHeaders({
    
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  });
  var body = JSON.stringify({"suplierEmail": data.get('suplierEmail').value, "drugName": data.get('drugName').value, "quantity": data.get('quantity').value, "batchId": data.get('batchId').value, "expiredDate": data.get('expiredDate').value, "price": data.get('price').value})
 return this.http.post('http://localhost:8080/api/v1/paymentGateway/initiateTransactions', body, { headers: headers });
 }
}
