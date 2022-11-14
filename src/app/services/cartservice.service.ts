import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/CartItem';
import { Drugs } from '../models/drugs';




@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

// carts:Cart=new Cart();
 

//   public cartData: any  = []; 
   public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");


  getProducts(){
    return this.productList.asObservable();
  }

  // setProduct(drugs : any){
  //   this.cartItemList.push(...drugs);
  //   this.productList.next(drugs);
  // }
 
//   addtoCart(drugs : any){
   
  
//     this.cartItemList.push(drugs);

//     this.productList.next(this.cartItemList);
//     this.calculateGrandTotal();
//     console.log(this.cartItemList)
//   }
//   getTotalPrice() : number{
    
//     let grandTotal = 0;
//     this.cartItemList.map((a:any)=>{
     
//       grandTotal += a.total;
//     })
//     return grandTotal;
   
//   }
//   removeCartItem(drugs: any){
//     this.cartItemList.map((a:any, index:any)=>{
//       if(drugs.drugId=== a.drugId){
//         this.cartItemList.splice(index,1);
//       }
//     })
//     this.productList.next(this.cartItemList);
//    alert( "you want to remove this "+drugs.drugName)
//   }
//   removeAllCart(){
//     this.cartItemList = []
//     this.productList.next(this.cartItemList);
//     alert("are you really want to empty the cart")
//   }


//   constructor( private httpClient: HttpClient) { }

 
 
//  calculateGrandTotal() {
//   var grandTotal = 0.0;
//   for (var i = 0; i < this.carts.products.length; i++)
//     grandTotal = grandTotal + this.carts.products[i].productPrice;
//   return grandTotal;

// }
cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  storage: Storage = sessionStorage;
  // storage: Storage = localStorage;

  constructor() { 

    // read data from storage
    let data = JSON.parse(this.storage.getItem('cartItems')!);

    if (data != null) {
      this.cartItems = data;
      
      // compute totals based on the data that is read from storage
      this.computeCartTotals();
    }

  }

  addToCart(theCartItem: CartItem) {

    // check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    // let existingCartItem: CartItem = undefined;
    let existingCartItem: CartItem = new CartItem();

    if (this.cartItems.length > 0) {
      // find the item in the cart based on item id

      existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id )!;

      // check if we found it
      alreadyExistsInCart = (existingCartItem != undefined);
    }

    if (alreadyExistsInCart) {
      // increment the quantity
      existingCartItem.quantity++;
    }
    else {
      // just add the item to the array
      this.cartItems.push(theCartItem);
      this.productList.next(this.cartItems);
    }

    // compute cart total price and total quantity
    this.computeCartTotals();
  }

  computeCartTotals() {

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.price!;
      totalQuantityValue += currentCartItem.quantity;
    }

    // publish the new values ... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data just for debugging purposes
    this.logCartData(totalPriceValue, totalQuantityValue);

    // persist cart data
    this.persistCartItems();
  }

  persistCartItems() {
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {

    console.log('Contents of the cart');
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.price!;
      console.log(`name: ${tempCartItem.name}, quantity=${tempCartItem.quantity}, unitPrice=${tempCartItem.price}, subTotalPrice=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log('----');
  }

  decrementQuantity(theCartItem: CartItem) {

    theCartItem.quantity--;

    if (theCartItem.quantity === 0) {
      this.remove(theCartItem);
    }
    else {
      this.computeCartTotals();
    }
  }

  remove(theCartItem: CartItem) {

    // get index of item in the array
    const itemIndex = this.cartItems.findIndex( tempCartItem => tempCartItem.id === theCartItem.id );

    // if found, remove the item from the array at the given index
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }

}
