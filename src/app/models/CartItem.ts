import { Cart } from "./cart.model";
import { Drugs } from "./drugs";

export class CartItem{

//       cartItemId:any;

// 	 quantity:number=0;

// 	 price:number=0;

// 	 drug:Drugs[]=[];
	
//      cart: Cart[]=[];
 
//   drugName: any;
public id: number=0;
public name: string='';
public quantity: number=0;
public price: number=0;
public total: number=0;
constructor(id: number, name: string, quantity: number, price: number) {
	// constructor(public name: string, public quantity: number, public price: number) {
	  this.id = id;
	  this.name = name;
	  this.quantity = quantity;
	  this.price = price;
	  this.total = this.quantity * this.price;
	}

}