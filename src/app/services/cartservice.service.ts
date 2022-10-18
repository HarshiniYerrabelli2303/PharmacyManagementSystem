import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/CartItem';
import { Drugs } from '../models/drugs';




@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

carts:Cart=new Cart();
 

  public cartData: any  = []; 
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
 public search = new BehaviorSubject<string>("");


  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(drugs : any){
    this.cartItemList.push(...drugs);
    this.productList.next(drugs);
  }
 
  addtoCart(drugs : any){
   
  
    this.cartItemList.push(drugs);

    this.productList.next(this.cartItemList);
    this.calculateGrandTotal();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
     
      grandTotal += a.total;
    })
    return grandTotal;
   
  }
  removeCartItem(drugs: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(drugs.drugId=== a.drugId){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
   alert( "you want to remove this "+drugs.drugName)
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    alert("are you really want to empty the cart")
  }


  constructor( private httpClient: HttpClient) { }

 
 
 calculateGrandTotal() {
  var grandTotal = 0.0;
  for (var i = 0; i < this.carts.products.length; i++)
    grandTotal = grandTotal + this.carts.products[i].productPrice;
  return grandTotal;

}

}
