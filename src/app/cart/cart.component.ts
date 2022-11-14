import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartItem } from '../models/CartItem';

import { CartserviceService } from '../services/cartservice.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
//    public products : any = [];
//    cartId:number=0;
//   // public grandTotal : number=0;
//    constructor(private cartService : CartserviceService,private user:UsersService) { }

//   ngOnInit(): void {
//     this.user.viewProfileByName().subscribe((data:any)=>{
// this.cartId=data.cartId;
//     })
//     this.cartService.getProducts()
//     .subscribe((res:any)=>{
//       this.products = res;
//      this.grandTotal();
//     })

//   }
 
//   grandTotal(){
//     return this.cartService.calculateGrandTotal();
//   }
//   removeItem(item: any){
//     this.cartService.removeCartItem(item);
//   }
//   emptycart(){
//     this.cartService.removeAllCart();
//   }
//   quantity:number=12;
cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartserviceService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {

    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      (data:any) => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe( 
      (data:any) => this.totalQuantity = data
    );

    // compute cart total price and quantity
    this.cartService.computeCartTotals();
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }
}
