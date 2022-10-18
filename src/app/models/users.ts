
import { Cart } from "./cart.model";

export class Users {
    userId: any;
    firstName : string="";
    lastName : string ="";
    gender : string="";
    phone :string ="";
    email: string="";
    userName: string="";
    password:string="";
    role:string="";
    cart:Cart[]=[];
}
