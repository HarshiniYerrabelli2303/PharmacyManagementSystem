import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Drugs } from './modules/drugs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DrugServiceService {

  drugs:object | undefined;
  constructor( private httpClient: HttpClient) { }

  insertData(formData:any):Observable<Object>{
    
    const headers = new HttpHeaders({
    
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });

    var body = JSON.stringify({"suplierEmail": formData.get('suplierEmail').value, "drugName": formData.get('drugName').value, "quantity": formData.get('quantity').value, "batchId": formData.get('batchId').value, "expiredDate": formData.get('expiredDate').value, "price": formData.get('price').value})
    return this.httpClient.post('http://localhost:8099/drugs/addDrug', body, { headers: headers })
   
  }
  getAllDrugs():Observable<Drugs[]> {
    
    return this.httpClient.get<Drugs[]>('http://localhost:8099/drugs/getAllDrug')
  
  }
  deleteDrugs(id:number):Observable<Object> {
    
    return this.httpClient.delete('http://localhost:8099/drugs/deleteDrug/' + id)
    
  }
  getOneDrug(id:number):Observable<Drugs> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      
    });
    return this.httpClient.get<Drugs>('http://localhost:8099/drugs/getDrug/' + id,{headers:headers})
    
  }
  updateDrug(formData:any
    ,id:number):Observable<Object> {
    const body = new HttpParams()
      .set("suplierEmail", formData.get('suplierEmail').value)
      .set("drugName", formData.get('drugName').value,)
      .set("quantity", formData.get('quantity').value)
      .set("batchId", formData.get('batchId').value)
      .set("expiredDate", formData.get('expiredDate').value)
      .set("price", formData.get('price').value)

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',

    });

    return this.httpClient.put('http://localhost:8099/drugs/editDrug/'+id, body.toString(), { headers: headers })
   
  }
}
