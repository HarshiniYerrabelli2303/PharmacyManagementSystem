import {Drugs} from './drugs';

export class ProductInOrder {
 productId: string='';
    productName: string='';
    productPrice: number=0;
    productStock: number=0;
    count: number=0;

    constructor(drug:Drugs, quantity = 1){
        this.productId = drug.drugId;
        this.productName = drug.drugName;
        this.productPrice = drug.price;
        this.productStock = drug.quantity;
        this.count = quantity;
    }
}