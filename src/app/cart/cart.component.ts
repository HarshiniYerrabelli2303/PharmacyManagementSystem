import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../services/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal : number=0;
  constructor(private cartService : CartserviceService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
     this.calcCartTotal();
    })
    
  }
 
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  quantity:number=1;
  i=1;
  plus(){
    if(this.i!=1000000){
      this.i++;
      this.quantity=this.i;
    }
  }
  minus(){
    if(this.i!=1){
      this.i--;
      this.quantity=this.i;
    }
  }
  calcCartTotal(){
    this.grandTotal =0
    this.products.array.forEach((element:any) => {
      this.grandTotal+=(element.quantity*element.price);
    });

  }
}
