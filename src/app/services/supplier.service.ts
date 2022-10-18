import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suppliermodel } from '../models/Suppliermodel';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  
  private baseURL="http://localhost:8099/supplier";

  constructor(private httpClient:HttpClient) { }
  insertData(formData:any):Observable<Object>{
    
    const headers = new HttpHeaders({
    
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });

    var body = JSON.stringify({"name": formData.get('name').value,"contactNo": formData.get('contactNo').value,"supplierEmail": formData.get('supplierEmail').value, "drugName": formData.get('drugName').value})
    return this.httpClient.post('http://localhost:8099/supplier/createsupplier', body, { headers: headers })
   
  }
  getAllSupplier():Observable<Suppliermodel[]> {
    
    return this.httpClient.get<Suppliermodel[]>('http://localhost:8099/supplier/getAllSupplier')
  
  }
  deleteSupplier(id:number):Observable<Object> {
    
    return this.httpClient.delete('http://localhost:8099/supplier/deletesupplier/' + id)
    
  }
  getOneSupplier(id:number):Observable<Suppliermodel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      
    });
    return this.httpClient.get<Suppliermodel>('http://localhost:8099/supplier/getsupplier/' + id,{headers:headers})
    
  }
  updateSupplier(supplier:Suppliermodel
    ,id:number):Observable<Object> {
    

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });

    return this.httpClient.put('http://localhost:8099/supplier/updatesupplier/'+id, supplier, { headers: headers })
   
  }
  
}
