import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  public cartData: any  = []; 
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
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
    this.getTotalPrice();
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

 
}
